import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { FathymSharedModule } from '@lcu/hosting';
import { JsonSchemaEditorModule } from '@lowcodeunit/json-schema-editor';
import { ForgeAssetsDomainInputBuilderComponent } from './assets-domain-input-builder/assets-domain-input-builder.component';
import { ForgeAssetsDomainInputMarketplaceComponent } from './assets-domain-input-marketplace/assets-domain-input-marketplace.component';
import { ForgeAssetsDomainInputRenderComponent } from './assets-domain-input-render/assets-domain-input-render.component';
import { BaseDisplayModule } from '@lcu/elements';

export class ForgeAssetsDomainInputDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeAssetsDomainInputBuilderComponent;
	}

	public Marketplace() {
		return ForgeAssetsDomainInputMarketplaceComponent;
	}

	public Render() {
		return ForgeAssetsDomainInputRenderComponent;
	}
}

var comps = [
	ForgeAssetsDomainInputBuilderComponent,
	ForgeAssetsDomainInputMarketplaceComponent,
	ForgeAssetsDomainInputRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		JsonSchemaEditorModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatProgressSpinnerModule,
		FlexLayoutModule,
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
export class ForgeAssetsDomainInputModule { }
