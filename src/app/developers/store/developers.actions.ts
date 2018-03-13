import {Action} from '@ngrx/store';
import {type} from '../../shared/utils/store-utils';

export const ActionTypes = {
  COMMIT: type('[Devs] Commit'),
  UPDATE_POSITION: type('[Devs] Update Position')
};

export class CommitAction implements Action {
  public readonly type = ActionTypes.COMMIT;
}

export class UpdatePositionAction implements Action {
  public readonly type = ActionTypes.UPDATE_POSITION;
}

export type Actions
  = CommitAction
  | UpdatePositionAction;
