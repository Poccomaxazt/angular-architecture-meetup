import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import * as fromRoot from '../../store/reducers';
import { ConfirmModalContentComponent } from '../components/confirm-modal/confirm-modal-content.component';
import { Store } from '@ngrx/store';

@Injectable()
export class ConfirmModalService {
  private readonly width: string = `500px`;
  private dialogRef: MatDialogRef<ConfirmModalContentComponent>;

  constructor(
    private store: Store<fromRoot.State>,
    private dialog: MatDialog
  ) {
  }

  public initSubcribtion(): void {
    this.store.select(fromRoot.showConfirmModal)
      .subscribe(show => show ? this.openConfirmModal() : this.closeConfirmModal());
  }

  private openConfirmModal(): void {
    this.dialogRef = this.dialog.open(ConfirmModalContentComponent, { width: this.width });
  }

  private closeConfirmModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
