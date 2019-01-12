import { Inject } from '@angular/core';
import { SingletonService } from '../svc/singleton.service';
import { EnterpriseAssetTypeConfig } from '../enterprise-asset-type-config';
import { BaseConfigContext } from './base-config.context';

export class AssetTypeContext extends BaseConfigContext<EnterpriseAssetTypeConfig> {
	//	Fields
	protected assetType: string;

	//	Properties

	//	Constructors
	constructor(assetType: string, protected configSvc: SingletonService) {
		super(configSvc, true);

		this.assetType = assetType;

		this.load();
	}

	//	API Methods

	//	Helpers
	protected loadConfigKey() {
		return `ForgeAssetTypeConfig-${this.assetType}`;
	}

	protected loadDefaultConfig(): EnterpriseAssetTypeConfig {
		return <EnterpriseAssetTypeConfig>{ ListingColumnsToDisplay: [], DataType: this.assetType };
	}
}
