import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeAssetsDomainViewDetails, ForgeAssetsDomainViewConfig } from '../assets-domain-view.core';
import { DataFlowContext } from '@lcu/daf-common';
import { DataSetDomainConfig } from '@lcu/apps';
import { SingletonService } from '@lcu/enterprises';
import { BaseModeledResponse, isResultSuccess } from '@lcu/core';

@Component({
	selector: 'forge-assets-domain-view-render',
	templateUrl: './assets-domain-view-render.component.html',
	styleUrls: ['./assets-domain-view-render.component.scss']
})
export class ForgeAssetsDomainViewRenderComponent
	extends ForgeGenericControl<ForgeAssetsDomainViewDetails, ForgeAssetsDomainViewConfig>
	implements IControlRender<ForgeAssetsDomainViewDetails, ForgeAssetsDomainViewConfig> {
		//  Fields
	
		//  Properties
		public get DomainsDataSet(): DataFlowContext<any> {
			return this.Data ? this.Data[this.Details.DataSetKey] : null;
		}
	
		public Domains: any[];
	
		public DomainConfig: DataSetDomainConfig;
	
		public Loading: boolean;
	
		//  Constructors
		constructor(protected injector: Injector, protected configSvc: SingletonService) {
			super(injector);
	
			this.Domains = [];
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
							} else {
	
							}
						});
			}
		}
	
		//	API Methods
	
		//	Helpers
	//	Helpers
}
