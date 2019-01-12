import { Injectable, Inject } from '@angular/core';
import { BaseConfigContext } from './base-config.context';
import { SingletonService } from '../svc/singleton.service';
import { EnterpriseAssetsConfig } from '../enterprise-asset-config';

@Injectable({
	providedIn: 'root'
})
export class AssetsConfigContext extends BaseConfigContext<EnterpriseAssetsConfig> {
	//	Fields

	//	Properties

	//	Constructors
	constructor(@Inject(SingletonService) configSvc: SingletonService) {
		super(configSvc);
	}

	//	API Methods

	//	Helpers
	protected loadConfigKey() {
		return `ForgeEnterpriseAssetsConfig`;
	}

	protected loadDefaultConfig(): EnterpriseAssetsConfig {
		return { DataTypes: [] };
	}
}
