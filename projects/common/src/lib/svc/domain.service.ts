import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from '@lcu/common';
import { BaseModeledResponse, BaseResponse } from '@lcu/core';
import { DAFService } from '@lcu/api';

@Injectable({
	providedIn: 'root'
})
export class DomainService extends DAFService {
	//	Fields
	protected domainRootUrl: string = '/daf-domain';

	//	Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	API Methods
	public Create(domainType: string, domain: any): Observable<BaseModeledResponse<string>> {
		return this.post(domain, `${this.domainRootUrl}/${domainType}`);
	}

	public Delete(domainType: string, id: string): Observable<BaseResponse> {
		return this.delete(`${this.domainRootUrl}/${domainType}/${id}`);
	}

	public Fetch(domainType: string, ids: string[]): Observable<BaseModeledResponse<any[]>> {
		var idStrs = ids.map(id => `ids=${id}`);

		var idsQuery = idStrs.join('&');

		return this.get(`${this.domainRootUrl}/${domainType}/fetch?${idsQuery}`);
	}

	public Get(domainType: string, id: string): Observable<BaseModeledResponse<any>> {
		return this.get(`${this.domainRootUrl}/${domainType}/${id}`);
	}

	public List(domainType: string, page: number, pageSize: number): Observable<BaseModeledResponse<Pageable<any>>> {
		return this.get(`${this.domainRootUrl}/${domainType}/list/${page}/${pageSize}`);
	}

	public Lookup(domainType: string, lookup: string): Observable<BaseModeledResponse<any>> {
		return this.get(`${this.domainRootUrl}/${domainType}/lookup/${lookup}`);
	}

	public Search(domainType: string, where?: string, parameters?: any, select?: string, orderBy?: string, limit?: string): Observable<BaseModeledResponse<any[]>> {
		var querySets = [];

		if (where)
			querySets.push(`where=${where}`);

		if (parameters)
			querySets.push(`parameters=${JSON.stringify(parameters)}`);

		if (select)
			querySets.push(`select=${select}`);

		if (orderBy)
			querySets.push(`orderBy=${orderBy}`);

		if (limit)
			querySets.push(`limit=${limit}`);

		return this.get(`${this.domainRootUrl}/${domainType}/search?${querySets.join('&')}`);
	}

	public Update(domainType: string, domain: any): Observable<BaseResponse> {
		return this.put(domain, `${this.domainRootUrl}/${domainType}`);
	}

	//	Helpers
}
