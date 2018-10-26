import { Injectable } from '@angular/core';
import { ApiService } from '../../api/services/api.service';
import { Observable } from 'rxjs/Observable';
import { Language } from '../../api/models/language';
import { shareReplay } from 'rxjs/operators/shareReplay';
import { tap } from 'rxjs/operators';

const CACHE_SIZE = 1;

@Injectable()
export class LanguagesService {
  private cache$: Observable<Language[]>;

  constructor(private api: ApiService) {
  }

  public getLanguages(): Observable<Language[]> {
    if (!this.cache$) {
      this.cache$ = this.loadLanguages()
        .pipe(
          tap((l) => console.log('Loaded languages: ', l)),
          shareReplay(CACHE_SIZE)
        );
    }

    return this.cache$;
  }

  private loadLanguages(): Observable<Language[]> {
    return this.api.getLanguages();
  }
}
