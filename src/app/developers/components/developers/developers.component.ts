import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'im-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevelopersComponent {
}
