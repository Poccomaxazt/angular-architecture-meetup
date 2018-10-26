import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'im-lang-commits',
  templateUrl: './lang-commits.component.html',
  styleUrls: ['./lang-commits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LangCommitsComponent {
  @Input()
  public title: string;

  @Input()
  public progress: number;
}
