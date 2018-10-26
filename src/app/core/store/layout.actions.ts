import { Action } from '@ngrx/store';
import { type } from '../../shared/utils/store-utils';
import { ConfirmModal } from '../../shared/components/confirm-modal/confirm-modal.model';

export const ActionTypes = {
  SHOW_CONFIRM_MODAL: type('[Layout] Show Confirm Modal'),
  HIDE_CONFIRM_MODAL: type('[Layout] Hide Confirm Modal'),
  SHOW_PROGRESS: type('[Layout] Show Progress Spinner'),
  HIDE_PROGRESS: type('[Layout] Hide Progress Spinner')
};

export class ShowConfirmModalAction implements Action {
  public readonly type: string = ActionTypes.SHOW_CONFIRM_MODAL;

  constructor(public payload: ConfirmModal) { }
}

export class HideConfirmModalAction implements Action {
  public readonly type: string = ActionTypes.HIDE_CONFIRM_MODAL;
}

export class ShowProgressAction implements Action {
  public readonly type: string = ActionTypes.SHOW_PROGRESS;
}

export class HideProgressAction implements Action {
  public readonly type: string = ActionTypes.HIDE_PROGRESS;
}

export type Actions
  = ShowConfirmModalAction
  | HideConfirmModalAction
  | ShowProgressAction
  | HideProgressAction;
