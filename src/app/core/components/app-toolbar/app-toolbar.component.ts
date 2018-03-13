import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Confirmation} from '../../../shared/decorators/confirmation.decorator';
import {map} from 'rxjs/operators/map';
import {User} from '../../../api/models/user';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'im-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppToolbarComponent {
  public logged$: Observable<boolean> = this.authService.getLoggedIn();
  public name$: Observable<string> = this.authService.getUserData().pipe(map((u: User) => u.name));

  constructor(private authService: AuthService) {
  }

  @Confirmation('Are sure you want to logout?')
  public onLogout(): void {
    this.authService.logout();
  }
}
