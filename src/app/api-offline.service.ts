import {ApiService} from './api/services/api.service';
import {Observable} from 'rxjs/Observable';
import {Language} from './api/models/language';
import {LanguageType} from './api/models/language-type';
import {Observer} from 'rxjs/Observer';
import {User} from './api/models/user';

export class ApiOfflineService extends ApiService {
  public getLanguages(): Observable<Language[]> {
    return Observable.create((observer: Observer<Language[]>) => {
      observer.next([
        {
          id: 'js',
          name: LanguageType.JAVA_SCRIPT
        },
        {
          id: 'csharp',
          name: LanguageType.CSHARP
        }
      ]);
      observer.complete();
    });
  }

  public login(user: User): Observable<User> {
    return Observable.create((observer: Observer<User>) => {
      observer.next(user);
      observer.complete();
    });
  }
}
