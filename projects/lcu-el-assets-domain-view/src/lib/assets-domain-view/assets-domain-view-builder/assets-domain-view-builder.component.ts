import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeAssetsDomainViewDetails, ForgeAssetsDomainViewConfig } from '../assets-domain-view.core';

@Component({
	selector: 'forge-assets-domain-view-builder',
	templateUrl: './assets-domain-view-builder.component.html',
	styleUrls: ['./assets-domain-view-builder.component.scss']
})
export class ForgeAssetsDomainViewBuilderComponent
	extends ForgeGenericControl<ForgeAssetsDomainViewDetails, ForgeAssetsDomainViewConfig>
	implements IControlBuilder<ForgeAssetsDomainViewDetails, ForgeAssetsDomainViewConfig> {
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
