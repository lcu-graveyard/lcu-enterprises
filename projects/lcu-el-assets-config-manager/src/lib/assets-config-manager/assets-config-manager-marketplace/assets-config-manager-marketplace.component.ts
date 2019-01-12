import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeAssetsConfigManagerDetails, ForgeAssetsConfigManagerConfig } from '../assets-config-manager.core';

@Component({
	selector: 'forge-assets-config-manager-marketplace',
	templateUrl: './assets-config-manager-marketplace.component.html',
	styleUrls: ['./assets-config-manager-marketplace.component.scss']
})
export class ForgeAssetsConfigManagerMarketplaceComponent
	extends ForgeGenericControl<ForgeAssetsConfigManagerDetails, ForgeAssetsConfigManagerConfig>
	implements IControlMarketplace<ForgeAssetsConfigManagerDetails, ForgeAssetsConfigManagerConfig> {
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
