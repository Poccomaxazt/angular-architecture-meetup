import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Confirmation} from '../../../shared/decorators/confirmation.decorator';

@Component({
  selector: 'im-developer-actions',
  templateUrl: './developer-actions.component.html',
  styleUrls: ['./developer-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperActionsComponent {
  @Input()
  public activeUpdate: boolean;

  @Output()
  private commit: EventEmitter<void> = new EventEmitter();

  @Output()
  private update: EventEmitter<void> = new EventEmitter();

  @Confirmation('Commit your last changes?')
  public onCommit(): void {
    this.commit.emit();
  }

  @Confirmation('Update your position?')
  public onUpdate(): void {
    this.update.emit();
  }
}
