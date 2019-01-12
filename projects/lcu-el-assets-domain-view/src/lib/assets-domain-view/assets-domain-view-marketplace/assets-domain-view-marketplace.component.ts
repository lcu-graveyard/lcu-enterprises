import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeAssetsDomainViewDetails, ForgeAssetsDomainViewConfig } from '../assets-domain-view.core';

@Component({
	selector: 'forge-assets-domain-view-marketplace',
	templateUrl: './assets-domain-view-marketplace.component.html',
	styleUrls: ['./assets-domain-view-marketplace.component.scss']
})
export class ForgeAssetsDomainViewMarketplaceComponent
	extends ForgeGenericControl<ForgeAssetsDomainViewDetails, ForgeAssetsDomainViewConfig>
	implements IControlMarketplace<ForgeAssetsDomainViewDetails, ForgeAssetsDomainViewConfig> {
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
