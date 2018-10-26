import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import { Observable } from 'rxjs/Observable';
import { ConfirmModal } from '../components/confirm-modal/confirm-modal.model';
import * as layout from '../../core/store/layout.actions';

@Injectable()
export class ConfirmationService {

  constructor(
    private store: Store<fromRoot.State>
  ) {
  }

  public getConfirmationContent(): Observable<ConfirmModal> {
    return this.store.select(fromRoot.getConfirmContent);
  }

  public hideConfirmationContent(): void {
    this.store.dispatch(new layout.HideConfirmModalAction());
  }
}
