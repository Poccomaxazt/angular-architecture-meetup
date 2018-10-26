import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Developer } from '../../developer-types/developer';

@Component({
  selector: 'im-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperCardComponent {
  @Input()
  public developer: Developer;
}
