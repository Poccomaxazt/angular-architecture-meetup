import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SkillComponent} from '../skill-component.model';
import {DynamicComponent} from '../../../../shared/decorators/dynamic-component.decorator';

@Component({
  selector: 'im-desktop-skill',
  templateUrl: './desktop-skill.component.html',
  styleUrls: ['../skill-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@DynamicComponent('desktop')
export class DesktopSkillComponent implements SkillComponent {
  public type: string;
}
