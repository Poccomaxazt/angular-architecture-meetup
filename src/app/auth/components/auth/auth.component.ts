import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'im-auth',
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
}
