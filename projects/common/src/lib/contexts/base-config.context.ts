import { BehaviorSubject, Observable } from 'rxjs';
import { Status } from '@lcu/common';
import { isResultSuccess } from '@lcu/core';
import { ObservableContextService } from '@lcu/api';
import { SingletonService } from '../svc/singleton.service';

export abstract class BaseConfigContext<T> extends ObservableContextService<T> {
	//	Fields
	protected error: BehaviorSubject<any>;

	protected winAny: any;

	//	Properties
	public get AppID(): string {
		return this.winAny.ViewBag.ApplicationID;
	}

	public get BaseHref(): string {
		return document.getElementsByTagName('base')[0].href;
	}

	public get CurrentPath(): string {
        var path = window.location.href.replace(this.BaseHref, '');

        path = path.replace(location.search, '');

		var curPath = `/${path}`;

		return curPath.split('/').join('-');
	}

	public Error: Observable<any>;

	//	Constructors
	constructor(protected configSvc: SingletonService, blockLoad?: boolean) {
		super();

		this.error = new BehaviorSubject(null);

		this.Error = this.error.asObservable();

		this.winAny = window;

		if (!blockLoad)
			this.load();
	}

	//	API Methods
	public Load(): Observable<Status> {
		return new Observable(obs => {
			this.loading(true);

			this.error.next(null);

			this.configSvc.Get(this.loadConfigKey()).subscribe(
				(result) => {
					if (isResultSuccess(result)) {
						this.subject.next(result.Model);

						obs.next(result.Status);
					} else if (result.Status.Code == 2) {
						this.subject.next(this.loadDefaultConfig());

						obs.next(<Status>{ Code: 0, Message: 'Success' });
					} else {
						this.error.next(result.Status);

						obs.next(result.Status);
					}
				},
				(err) => {
					this.error.next(err);

					obs.next(<Status>{ Code: 1, Message: err });
				},
				() => {
					this.loading(false);

					obs.complete();
				});
		});
	}

	public Save(config: T): Observable<Status> {
		return new Observable(obs => {
			this.loading(true);

			this.error.next(null);

			this.configSvc.Save(this.loadConfigKey(), config).subscribe(
				(result) => {
					if (isResultSuccess(result)) {
						this.Load().subscribe();
					} else {
						this.error.next(result.Status);
					}

					obs.next(result.Status);
				},
				(err) => {
					this.error.next(err);

					obs.next(<Status>{ Code: 1, Message: err });
				},
                () => {
                    this.loading(false);

					obs.complete();
				});
		});
	}

	//	Helpers
	protected load() {
		this.Load().subscribe();
	}

	protected abstract loadConfigKey(): string;

	protected abstract loadDefaultConfig(): T;
}
