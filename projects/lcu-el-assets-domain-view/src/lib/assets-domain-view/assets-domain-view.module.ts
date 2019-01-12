import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule } from '@lcu/hosting';
import { ForgeAssetsDomainViewBuilderComponent } from './assets-domain-view-builder/assets-domain-view-builder.component';
import { ForgeAssetsDomainViewMarketplaceComponent } from './assets-domain-view-marketplace/assets-domain-view-marketplace.component';
import { ForgeAssetsDomainViewRenderComponent } from './assets-domain-view-render/assets-domain-view-render.component';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule } from '@angular/material';
import { BaseDisplayModule } from '@lcu/elements';
import { GenericDomainModule } from '@lcu/daf-ui';

export class ForgeAssetsDomainViewDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeAssetsDomainViewBuilderComponent;
	}

	public Marketplace() {
		return ForgeAssetsDomainViewMarketplaceComponent;
	}

	public Render() {
		return ForgeAssetsDomainViewRenderComponent;
	}
}

var comps = [
	ForgeAssetsDomainViewBuilderComponent,
	ForgeAssetsDomainViewMarketplaceComponent,
	ForgeAssetsDomainViewRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		GenericDomainModule,
		FlexLayoutModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatProgressSpinnerModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class ForgeAssetsDomainViewModule { }
