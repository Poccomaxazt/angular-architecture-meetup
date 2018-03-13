import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'im-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsListComponent {
  @Input()
  public skills: string[];

  public trackByValue(index: number, item: string): string {
    return item;
  }
}
