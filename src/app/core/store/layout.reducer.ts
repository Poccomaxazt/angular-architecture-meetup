import * as layout from './layout.actions';
import {ShowConfirmModalAction} from './layout.actions';
import {ConfirmModal} from '../../shared/components/confirm-modal/confirm-modal.model';

export interface State {
  showConfirmModal: boolean;
  confirmModalContent: ConfirmModal;
  inProgress: boolean;
}

const initialState: State = {
  showConfirmModal: false,
  confirmModalContent: null,
  inProgress: false
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.SHOW_CONFIRM_MODAL: {
      return Object.assign({}, state, {
        showConfirmModal: true,
        confirmModalContent: (action as ShowConfirmModalAction).payload
      });
    }

    case layout.ActionTypes.HIDE_CONFIRM_MODAL: {
      return Object.assign({}, state, {
        showConfirmModal: false,
        confirmModalContent: null
      });
    }

    default: {
      return state;
    }
  }
}

export const showConfirmModal = (state: State) => state && state.showConfirmModal;
export const getConfirmModalContent = (state: State) => state && state.confirmModalContent;
export const getProgressState = (state: State) => state && state.inProgress;
