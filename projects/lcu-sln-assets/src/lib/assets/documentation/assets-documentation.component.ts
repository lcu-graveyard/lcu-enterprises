import { Component, Injector } from '@angular/core';
import { ISolutionControl, ForgeGenericSolution } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-assets-documentation',
	templateUrl: './assets-documentation.component.html',
	styleUrls: ['./assets-documentation.component.scss']
})
export class ForgeAssetsSolutionDocumentation extends ForgeGenericSolution
	implements ISolutionControl {
	//  Fields

	//  Properties
	public DocsRoot: string;

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);

		this.DocsRoot = 'https://raw.githubusercontent.com/lowcodeunit/lcu-sln-assets/master/docs/';
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
