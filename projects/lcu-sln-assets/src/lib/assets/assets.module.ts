import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DndModule } from '@beyerleinf/ngx-dnd';
import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseSolutionModule } from '@lcu/solutions';
import { GenericDomainModule } from '@lcu/daf-ui';
import { JsonSchemaEditorModule } from '@lowcodeunit/json-schema-editor';
import { NgxMarkdownDocsModule } from '@lowcodeunit/ngx-markdown-docs';
import { ForgeAssetsSolutionManage } from './manage/assets-manage.component';
import { ForgeAssetsSolutionDocumentation } from './documentation/assets-documentation.component';
import { ForgeAssetsSolutionHeading } from './heading/assets-heading.component';
import { ForgeAssetsSolutionMarketplace } from './marketplace/assets-marketplace.component';
import { ForgeAssetsSolutionOverview } from './overview/assets-overview.component';
import { ForgeAssetsSolutionCreateDialog } from './dialogs/assets-create/assets-create.dialog';
import { ForgeAssetsSolutionManageDataDialog } from './dialogs/asset-manage/asset-manage.dialog';
import { ForgeAssetsSolutionSettingsDialog } from './dialogs/assets-settings/assets-settings.dialog';

export class ForgeAssetsSolutionDisplayModule extends BaseSolutionModule {
	public Documentation() {
		return ForgeAssetsSolutionDocumentation;
	}

	public Heading() {
		return ForgeAssetsSolutionHeading;
	}

	public Manage() {
		return ForgeAssetsSolutionManage;
	}

	public Marketplace() {
		return ForgeAssetsSolutionMarketplace;
	}

	public Overview() {
		return ForgeAssetsSolutionOverview;
	}
}

var comps = [
	ForgeAssetsSolutionDocumentation,
	ForgeAssetsSolutionHeading,
	ForgeAssetsSolutionManage,
	ForgeAssetsSolutionMarketplace,
	ForgeAssetsSolutionOverview,
	ForgeAssetsSolutionCreateDialog,
	ForgeAssetsSolutionManageDataDialog,
	ForgeAssetsSolutionSettingsDialog,
];

@NgModule({
	imports: [
		FathymSharedModule,
		NgxMarkdownDocsModule,
		GenericDomainModule,
		FlexLayoutModule,
		JsonSchemaEditorModule,
		DndModule,
		MaterialDesignFrameworkModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatCheckboxModule,
		MatDialogModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatToolbarModule,
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
export class ForgeAssetsSolutionModule {
}
