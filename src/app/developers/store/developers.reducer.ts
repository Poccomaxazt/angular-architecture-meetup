import * as devs from './developers.actions';
import * as auth from '../../auth/store/auth.actions';

export interface State {
  commits: number;
}

const initialState: State = {
  commits: 0
};

export function reducer(state = initialState, action: devs.Actions): State {
  switch (action.type) {
    case devs.ActionTypes.COMMIT: {
      return Object.assign({}, state, {
        commits: state.commits + 1
      });
    }

    case auth.ActionTypes.LOGOUT: {
      return Object.assign({}, state, {
        commits: 0
      });
    }

    default: {
      return state;
    }
  }
}

export const getCommits = (state: State = initialState) => state.commits;
