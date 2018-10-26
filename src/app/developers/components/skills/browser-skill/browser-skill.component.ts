import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillComponent } from '../skill-component.model';
import { DynamicComponent } from '../../../../shared/decorators/dynamic-component.decorator';

@Component({
  selector: 'im-browser-skill',
  templateUrl: './browser-skill.component.html',
  styleUrls: ['../skill-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@DynamicComponent('browser')
export class BrowserSkillComponent implements SkillComponent {
  public type: string;
}
