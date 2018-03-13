import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ConfirmModal} from './confirm-modal.model';
import 'rxjs/add/operator/first';
import {ConfirmationService} from '../../services/confirmation.service';

@Component({
  selector: 'im-confirm-modal-content',
  templateUrl: './confirm-modal-content.component.html',
  styleUrls: ['./confirm-modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmModalContentComponent {
  public content$: Observable<ConfirmModal>;

  constructor(
    private confirmService: ConfirmationService
  ) {
    this.content$ = this.confirmService.getConfirmationContent();
  }

  public onOk(): void {
    this.content$
      .first()
      .subscribe((content: ConfirmModal) => {
        if (content && typeof content.onConfirm === 'function') {
          content.onConfirm(true);
        }
      });

    this.callCloseAction();
  }

  public onCancel(): void {
    this.content$
      .first()
      .subscribe((content: ConfirmModal) => {
        if (content && typeof content.onCancel === 'function') {
          content.onCancel(true);
        }
      });

    this.callCloseAction();
  }

  private callCloseAction(): void {
    this.confirmService.hideConfirmationContent();
  }
}
