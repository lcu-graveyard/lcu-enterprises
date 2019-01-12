import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeAssetsDomainInputDetails, ForgeAssetsDomainInputConfig } from '../assets-domain-input.core';

@Component({
	selector: 'forge-assets-domain-input-marketplace',
	templateUrl: './assets-domain-input-marketplace.component.html',
	styleUrls: ['./assets-domain-input-marketplace.component.scss']
})
export class ForgeAssetsDomainInputMarketplaceComponent
	extends ForgeGenericControl<ForgeAssetsDomainInputDetails, ForgeAssetsDomainInputConfig>
	implements IControlMarketplace<ForgeAssetsDomainInputDetails, ForgeAssetsDomainInputConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
