import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LanguagesSocketService} from '../../../languages/services/languages-socket.service';
import {Developer} from '../../developer-types/developer';
import {DevelopersService} from '../../services/developers.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {switchMap} from 'rxjs/operators/switchMap';
import {filter} from 'rxjs/operators/filter';

@Component({
  selector: 'im-developer-cabinet',
  templateUrl: './developer-cabinet.component.html',
  styleUrls: ['./developer-cabinet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperCabinetComponent {
  public developer$: Observable<Developer> = this.devService.getDeveloper();
  public activeUpdate$: Observable<boolean> = this.developer$
    .pipe(
      filter(Boolean),
      switchMap((d: Developer) => d.commits$.pipe(
        map((c: number) => d.isUpdatePossible(c))
      ))
    );

  constructor(
    private socket: LanguagesSocketService,
    private devService: DevelopersService
  ) { }

  public onCommit(developer: Developer): void {
    developer.makeCommit();
    this.socket.emit(developer.technology);
  }

  public onUpdate(developer: Developer): void {
    developer.updatePosition();
  }
}
