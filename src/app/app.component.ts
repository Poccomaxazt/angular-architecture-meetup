import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfirmModalService } from './shared/services/confirm-modal.service';

@Component({
  selector: 'im-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private cms: ConfirmModalService) {
    this.cms.initSubcribtion();
  }
}
