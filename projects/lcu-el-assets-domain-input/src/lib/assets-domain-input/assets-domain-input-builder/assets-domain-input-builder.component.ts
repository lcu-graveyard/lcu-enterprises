import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeAssetsDomainInputDetails, ForgeAssetsDomainInputConfig } from '../assets-domain-input.core';

@Component({
	selector: 'forge-assets-domain-input-builder',
	templateUrl: './assets-domain-input-builder.component.html',
	styleUrls: ['./assets-domain-input-builder.component.scss']
})
export class ForgeAssetsDomainInputBuilderComponent
	extends ForgeGenericControl<ForgeAssetsDomainInputDetails, ForgeAssetsDomainInputConfig>
	implements IControlBuilder<ForgeAssetsDomainInputDetails, ForgeAssetsDomainInputConfig> {
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
	
		//	API Methods
	
		//	Helpers
}
