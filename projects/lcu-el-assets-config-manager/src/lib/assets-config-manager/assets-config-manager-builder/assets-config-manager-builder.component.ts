import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeAssetsConfigManagerDetails, ForgeAssetsConfigManagerConfig } from '../assets-config-manager.core';
import { ForgeJSONSchema } from '@lcu/apps';

@Component({
	selector: 'forge-assets-config-manager-builder',
	templateUrl: './assets-config-manager-builder.component.html',
	styleUrls: ['./assets-config-manager-builder.component.scss']
})
export class ForgeAssetsConfigManagerBuilderComponent
	extends ForgeGenericControl<ForgeAssetsConfigManagerDetails, ForgeAssetsConfigManagerConfig>
	implements IControlBuilder<ForgeAssetsConfigManagerDetails, ForgeAssetsConfigManagerConfig> {
		//  Fields
	
		//  Properties
		public get DataSetKeys(): string[] {
			return this.Data ? Object.keys(this.Data) : [];
		}
	
		//  Constructors
		constructor(protected injector: Injector) {
			super(injector);
		}
	
		//	Life Cycle
		public ngOnInit() {
			super.ngOnInit();
		}
	
		//	API Methods
		public SchemaChanged(schema: ForgeJSONSchema) {
			setTimeout(() => {
				this.Element.Control.Details.ManageSchema = schema;
			}, 0);
		}
	
		//	Helpers
}
