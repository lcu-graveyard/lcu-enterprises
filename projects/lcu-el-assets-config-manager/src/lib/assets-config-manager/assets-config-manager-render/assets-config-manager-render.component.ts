import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeAssetsConfigManagerDetails, ForgeAssetsConfigManagerConfig } from '../assets-config-manager.core';
import { DataFlowContext } from '@lcu/daf-common';
import { ForgeJSONSchema } from '@lcu/apps';

@Component({
	selector: 'forge-assets-config-manager-render',
	templateUrl: './assets-config-manager-render.component.html',
	styleUrls: ['./assets-config-manager-render.component.scss']
})
export class ForgeAssetsConfigManagerRenderComponent
	extends ForgeGenericControl<ForgeAssetsConfigManagerDetails, ForgeAssetsConfigManagerConfig>
	implements IControlRender<ForgeAssetsConfigManagerDetails, ForgeAssetsConfigManagerConfig> {
		//  Fields
	
		//  Properties
		public get ConfigDataSet(): DataFlowContext<any> {
			return this.Data ? this.Data[this.Details.DataSetKey] : null;
		}
	
		public Config: any;
	
		public get ConfigSchema(): ForgeJSONSchema {
			return this.Data ? this.Details.ManageSchema : null;
		}
	
		//  Constructors
		constructor(protected injector: Injector) {
			super(injector);
	
			this.Config = {};
		}
	
		//	Life Cycle
		public ngOnInit() {
			super.ngOnInit();
	
			if (this.ConfigDataSet) {
				this.ConfigDataSet.Data.subscribe(
					(data) => {
						if (data) {
							this.Config = data.find(d => true);
						} 
	
						if (!this.Config)
							this.Config = {};
					});
			}
		}
	
		//	API Methods
		public Save() {
			this.ConfigDataSet.Save(this.Config);
	
			this.ConfigDataSet.Sync().subscribe();
		}
	
		//	Helpers
}
