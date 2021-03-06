import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { EnterpriseAssetTypeConfig } from '@lcu/enterprises';
import { Loading, BaseModeledResponse, isResultSuccess } from '@lcu/core';
import { Status, isStatusSuccess, Guid } from '@lcu/common';
import { JSONSchemaMap, ForgeJSONSchema } from '@lcu/apps';
import { ForgeJSONSchemaService } from '@lcu/daf-common';

@Component({
	selector: 'assets-settings-dialog',
	templateUrl: './assets-settings.dialog.html',
	styleUrls: ['./assets-settings.dialog.scss']
})
export class ForgeAssetsSolutionSettingsDialog implements OnInit {
	//	Fields

	//	Properties
	public Config: EnterpriseAssetTypeConfig;

	public Error: string;

	public Loading: Loading;

	public SchemaMap: JSONSchemaMap;

	//	Constructors
	constructor(protected dialogRef: MatDialogRef<ForgeAssetsSolutionSettingsDialog>,
		@Inject(MAT_DIALOG_DATA) config: EnterpriseAssetTypeConfig, protected schemaSvc: ForgeJSONSchemaService) {
		this.Config = JSON.parse(JSON.stringify(config));

		this.Loading = new Loading();
	}

	//	Life Cycle
	public ngOnInit() {
		this.loadJsonSchemaMap();
	}

	//	API Methods
	public Cancel() {
		this.dialogRef.close(<BaseModeledResponse<EnterpriseAssetTypeConfig>>{
			Model: null,
			Status: <Status>{
				Code: 1,
				Message: 'Cancelled'
			}
		});
	}

	public PivotProperties() {
		if (!this.SchemaMap)
			return [];

		var keys = Object.keys(this.SchemaMap.Schema.properties);

		return keys.map(k => this.SchemaMap.Schema.properties[k]);
	}

	public Save() {
		this.saveJsonSchemaMap().subscribe(
			(status) => {
				if (isStatusSuccess(status))
					this.dialogRef.close(<BaseModeledResponse<EnterpriseAssetTypeConfig>>{
						Model: this.Config,
						Status: status
					});
			});
	}

	//	Helpers
	protected loadJsonSchemaMap() {
		if (this.Config.SchemaID) {
			this.Loading.Set(true);

			this.schemaSvc.Get(this.Config.SchemaID)
				.subscribe(
					(schemaResult) => {
						if (isResultSuccess(schemaResult)) {
							this.SchemaMap = schemaResult.Model;
						} else if (schemaResult.Status.Code == 2) {
							this.SchemaMap = <JSONSchemaMap>{
								Schema: <ForgeJSONSchema>{}
							};
						} else {
							console.log(schemaResult);

							this.Error = schemaResult.Status.Message;
						}
					},
					(error: any) => {
						console.log(error);

						this.Error = error;
					},
					() => {
						this.Loading.Set(false);
					});
		} else {
			this.SchemaMap = <JSONSchemaMap>{
				Schema: <ForgeJSONSchema>{}
			};
		}
	}

	protected saveJsonSchemaMap(): Observable<Status> {
		return new Observable(obs => {
			this.Loading.Set(true);

			this.SchemaMap.Active = true;

			if (this.SchemaMap.Schema && !this.SchemaMap.Schema.id) 
				this.SchemaMap.Schema.id = Guid.Create().ToString();

			if (!this.SchemaMap.Name)
				this.SchemaMap.Name = this.Config.DataType;
				
			if (!this.SchemaMap.Schema.title)
				this.SchemaMap.Schema.title = this.Config.DataType;

				if (!this.SchemaMap.Schema.sourceRef)
				this.SchemaMap.Schema.sourceRef = 'org';

			if (this.SchemaMap.Schema.properties) {
				var propKeys = Object.keys(this.SchemaMap.Schema.properties);
				
				propKeys.forEach(propKey => {
					var prop = this.SchemaMap.Schema.properties[propKey];

					if (prop && !prop.id) 
						prop.id = Guid.Create().ToString();	
				});
			}
			
			this.schemaSvc.Save(this.SchemaMap)
				.subscribe(
					(schemaResult) => {
						if (isResultSuccess(schemaResult)) {
							this.SchemaMap = schemaResult.Model;

							this.Config.SchemaID = schemaResult.Model.ID

							obs.next(<Status>{ Code: 0, Message: 'Success' });

							obs.complete();
						} else {
							console.log(schemaResult);

							this.Error = schemaResult.Status.Message;

							obs.next(schemaResult.Status);

							obs.complete();
						}
					},
					(error: any) => {
						console.log(error);

						this.Error = error;

						obs.next(<Status>{ Code: 1, Message: 'General Error' });

						obs.complete();
					},
					() => {
						this.Loading.Set(false);
					});
		});
	}
}
