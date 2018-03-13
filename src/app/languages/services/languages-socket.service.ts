import {Observable} from 'rxjs/Observable';
import {LanguageStatistic} from '../../api/models/language-statistic';
import {LanguageType} from '../../api/models/language-type';

export abstract class LanguagesSocketService {
  abstract connect(): void;

  abstract getStatistic(): Observable<LanguageStatistic[]>;

  abstract emit(commitLanguage: LanguageType): void;

  abstract disconnect(): void;
}
