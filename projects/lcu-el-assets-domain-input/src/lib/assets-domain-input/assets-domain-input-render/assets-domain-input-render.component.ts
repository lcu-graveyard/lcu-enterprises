import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeAssetsDomainInputDetails, ForgeAssetsDomainInputConfig } from '../assets-domain-input.core';
import { DataFlowContext, DatabaseService } from '@lcu/daf-common';
import { DataSetDomainConfig, ForgeJSONSchema } from '@lcu/apps';
import { DomainService, SingletonService } from '@lcu/enterprises';
import { BaseModeledResponse, isResultSuccess } from '@lcu/core';

@Component({
	selector: 'forge-assets-domain-input-render',
	templateUrl: './assets-domain-input-render.component.html',
	styleUrls: ['./assets-domain-input-render.component.scss']
})
export class ForgeAssetsDomainInputRenderComponent
	extends ForgeGenericControl<ForgeAssetsDomainInputDetails, ForgeAssetsDomainInputConfig>
	implements IControlRender<ForgeAssetsDomainInputDetails, ForgeAssetsDomainInputConfig> {
		//  Fields
	
		//  Properties
		public get DomainsDataSet(): DataFlowContext<any> {
			return this.Data ? this.Data[this.Details.DataSetKey] : null;
		}
	
		public Domains: any[];
	
		public DomainConfig: DataSetDomainConfig;
	
		public DomainSchema: ForgeJSONSchema;
	
		public DomainData: any;
	
		public Loading: boolean;
	
		//  Constructors
		constructor(protected injector: Injector, protected dbSvc: DatabaseService, protected configSvc: SingletonService, 
			protected domainSvc: DomainService) {
			super(injector);
	
			this.Domains = [];
	
			this.DomainData = {};
		}
	
		//	Life Cycle
		public ngOnInit() {
			super.ngOnInit();
	
			if (this.DomainsDataSet) {
				this.DomainsDataSet.Data.subscribe(
					(data) => {
						if (data) {
							this.Domains = data;
						}
					});
	
				this.DomainsDataSet.Loading.subscribe(loading => this.Loading = loading);
	
				this.configSvc.Get(this.DomainsDataSet.DSConfig.Type)
					.subscribe(
						(configResult: BaseModeledResponse<DataSetDomainConfig>) => {
							if (isResultSuccess(configResult)) {
								this.DomainConfig = configResult.Model;
	
								this.domainSvc.Get('JSONSchemaMap', this.DomainConfig.SchemaID).subscribe(
									(jsonSchemaResult) => {
										if (isResultSuccess(jsonSchemaResult)) {
											this.DomainSchema = jsonSchemaResult.Model.Schema;
										} else {
										}
									});
							} else {
	
							}
						});
			}
		}
	
		//	API Methods
		public Save() {
			this.DomainsDataSet.Save(this.DomainData);
	
			this.DomainsDataSet.Sync().subscribe(() => {
				this.DomainData = {};
			});
		}
	
		//	Helpers
}
