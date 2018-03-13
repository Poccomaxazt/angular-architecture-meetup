import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {DynamicComponent} from '../../../../shared/decorators/dynamic-component.decorator';
import {SkillComponent} from '../skill-component.model';

@Component({
  selector: 'im-mobile-skill',
  templateUrl: './mobile-skill.component.html',
  styleUrls: ['../skill-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@DynamicComponent('mobile')
export class MobileSkillComponent implements SkillComponent {
  public type: string;
}
