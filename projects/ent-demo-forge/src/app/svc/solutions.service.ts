import { Injectable } from '@angular/core';
import { BaseSolutionsService } from '@lcu/solutions';
import { SolutionModuleConfig } from '@lcu/elements';
import { ForgeAssetsSolutionDisplayModule } from '@lowcodeunit/lcu-sln-assets';
import { ForgeAssetsConfigManagerDisplayModule } from '@lowcodeunit/lcu-el-assets-config-manager';
import { ForgeAssetsDomainInputDisplayModule } from '@lowcodeunit/lcu-el-assets-domain-input';
import { ForgeAssetsDomainViewDisplayModule } from '@lowcodeunit/lcu-el-assets-domain-view';

@Injectable({
	providedIn: 'root'
})
export class EntDemoForgeSolutionsService extends BaseSolutionsService {
	//	Fields

	//	Constructor

	//	API Methods

	//	Helpers
	protected initSolutionModules() {
		this.localSolutionModules = [
      {
        Name: 'Solutions',
        Icon: 'fullscreen',
        BaseKey: 'forge-solution',
        Modules: <SolutionModuleConfig[]>[
          {
            Name: 'Assets',
            Control: { Base: 'forge-solution', Details: {}, Type: 'assets' },
            Solution: ForgeAssetsSolutionDisplayModule,
            DisplaySetups: [
              {
                Name: 'Assets',
                Icon: 'data_usage',
                BaseKey: 'forge-data',
                Modules: [
                  {
                    Name: 'Config Manager',
                    Control: { Base: 'forge-assets', Details: {}, Type: 'config-manager' },
                    Display: ForgeAssetsConfigManagerDisplayModule,
                    HideDrag: false,
                    BuilderState: 'Render',
                  },
                  {
                    Name: 'Asset Input',
                    Control: { Base: 'forge-assets', Details: {}, Type: 'domain-input' },
                    Display: ForgeAssetsDomainInputDisplayModule,
                    HideDrag: false,
                    BuilderState: 'Render',
                  },
                  {
                    Name: 'Asset View',
                    Control: { Base: 'forge-assets', Details: {}, Type: 'domain-view' },
                    Display: ForgeAssetsDomainViewDisplayModule,
                    HideDrag: false,
                    BuilderState: 'Render',
                  },
                ]
              },
            ],
          },
        ],
      },
		];
	}
}
