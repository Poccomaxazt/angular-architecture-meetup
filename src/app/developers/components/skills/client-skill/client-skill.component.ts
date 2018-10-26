import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicComponent } from '../../../../shared/decorators/dynamic-component.decorator';
import { SkillComponent } from '../skill-component.model';

@Component({
  selector: 'im-client-skill',
  templateUrl: './client-skill.component.html',
  styleUrls: ['../skill-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@DynamicComponent('client')
export class ClientSkillComponent implements SkillComponent {
  public type: string;
}
