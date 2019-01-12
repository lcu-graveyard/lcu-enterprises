import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseModeledResponse, BaseResponse } from '@lcu/core';
import { DAFService } from '@lcu/api';

@Injectable({
	providedIn: 'root'
})
export class SingletonService extends DAFService {
	//	Fields
	protected domainRootUrl: string = '/daf-domain/singleton';

	//	Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	API Methods
	public Get(domainType: string): Observable<BaseModeledResponse<any>> {
		return this.get(`${this.domainRootUrl}/${domainType}`);
	}

	public Patch(domainType: string, patch: any): Observable<BaseResponse> {
		return this.patch(patch, `${this.domainRootUrl}/${domainType}`);
	}

	public Save(domainType: string, domain: any): Observable<BaseResponse> {
		return this.post(domain, `${this.domainRootUrl}/${domainType}`);
	}
}
