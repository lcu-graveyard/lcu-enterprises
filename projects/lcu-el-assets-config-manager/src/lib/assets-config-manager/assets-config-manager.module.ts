import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule } from '@lcu/hosting';
import { JsonSchemaEditorModule } from '@lowcodeunit/json-schema-editor';
import { ForgeAssetsConfigManagerBuilderComponent } from './assets-config-manager-builder/assets-config-manager-builder.component';
import { ForgeAssetsConfigManagerMarketplaceComponent } from './assets-config-manager-marketplace/assets-config-manager-marketplace.component';
import { ForgeAssetsConfigManagerRenderComponent } from './assets-config-manager-render/assets-config-manager-render.component';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BaseDisplayModule } from '@lcu/elements';

export class ForgeAssetsConfigManagerDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeAssetsConfigManagerBuilderComponent;
	}

	public Marketplace() {
		return ForgeAssetsConfigManagerMarketplaceComponent;
	}

	public Render() {
		return ForgeAssetsConfigManagerRenderComponent;
	}
}

var comps = [
	ForgeAssetsConfigManagerBuilderComponent,
	ForgeAssetsConfigManagerMarketplaceComponent,
	ForgeAssetsConfigManagerRenderComponent,
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
export class ForgeAssetsConfigManagerModule { }
