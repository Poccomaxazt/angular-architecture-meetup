import * as auth from './auth.actions';
import { User } from '../../api/models/user';

export interface State {
  accessToken: string;
  user: User | {};
  loading: boolean;
}

const initialState: State = {
  accessToken: null,
  user: {},
  loading: false
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.ActionTypes.LOGIN: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case auth.ActionTypes.LOGIN_SUCCESS: {
      const user: User = (action as auth.LoginSuccessAction).payload;
      return Object.assign({}, state, {
        accessToken: user.name,
        user,
        loading: false
      });
    }

    case auth.ActionTypes.LOGIN_FAILURE: {
      const user: User = (action as auth.LoginSuccessAction).payload;
      return Object.assign({}, state, {
        loading: false
      });
    }

    case auth.ActionTypes.LOGOUT: {
      return Object.assign({}, state, {
        accessToken: null,
        user: {}
      });
    }

    default: {
      return state;
    }
  }
}

export const getAccessToken = (state: State = initialState) => state.accessToken;
export const getLoggedIn = (state: State = initialState) => !!state.accessToken;
export const getUser = (state: State = initialState) => state.user as User;
export const getLoading = (state: State = initialState) => state.loading;
