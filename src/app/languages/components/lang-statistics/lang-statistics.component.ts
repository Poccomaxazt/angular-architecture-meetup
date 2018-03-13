import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {LanguagesSocketService} from '../../services/languages-socket.service';
import {LanguageStatistic} from '../../../api/models/language-statistic';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'im-lang-statistics',
  templateUrl: './lang-statistics.component.html',
  styleUrls: ['./lang-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LangStatisticsComponent implements OnInit, OnDestroy {
  private commitsSum: number = 0;
  public langs: LanguageStatistic[] = [];

  private sub: Subscription;

  constructor(
    private socket: LanguagesSocketService,
    private cdr: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.sub = this.socket.getStatistic().subscribe((s: LanguageStatistic[]) => {
      this.commitsSum = s.reduce((acc, item: LanguageStatistic) => {
        acc += item.commits;
        return acc;
      }, 0);

      this.langs = s;
      this.cdr.markForCheck();
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public trackByFn(index): number {
    return index;
  }

  public calcProgress(commits: number): number {
    return Math.floor(commits / this.commitsSum * 100);
  }
}
