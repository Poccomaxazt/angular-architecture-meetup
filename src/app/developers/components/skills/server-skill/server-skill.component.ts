import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicComponent } from '../../../../shared/decorators/dynamic-component.decorator';
import { SkillComponent } from '../skill-component.model';

@Component({
  selector: 'im-server-skill',
  templateUrl: './server-skill.component.html',
  styleUrls: ['../skill-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@DynamicComponent('server')
export class ServerSkillComponent implements SkillComponent {
  public type: string;
}
