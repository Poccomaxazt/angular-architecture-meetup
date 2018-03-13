import {LanguagesSocketService} from './languages-socket.service';
import {Observable} from 'rxjs/Observable';
import {LanguageStatistic} from '../../api/models/language-statistic';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {LanguageType} from '../../api/models/language-type';

export class LanguagesOfflineSocketService extends LanguagesSocketService {
  protected statistic: BehaviorSubject<LanguageStatistic[]> = new BehaviorSubject([
    {
      name: LanguageType.JAVA_SCRIPT,
      commits: 3
    },
    {
      name: LanguageType.CSHARP,
      commits: 5
    }
  ]);

  constructor() {
    super();
    this.connect();
  }

  public connect(): void {
    // simulate activity
    setInterval(() => {
      const lang = Math.round(Math.random()) ? LanguageType.CSHARP : LanguageType.JAVA_SCRIPT;
      this.emit(lang);
    }, 2000);
  }

  public getStatistic(): Observable<LanguageStatistic[]> {
    return this.statistic.asObservable();
  }

  public emit(commitLanguage: LanguageType): void {
    const stat = this.statistic.getValue();
    const ind = stat.findIndex(l => l.name === commitLanguage);
    stat[ind].commits++;

    this.statistic.next(stat.concat());
  }

  public disconnect(): void {
  }
}
