import {Action} from '@ngrx/store';
import {type} from '../../shared/utils/store-utils';
import {User} from '../../api/models/user';

export const ActionTypes = {
  LOGIN: type('[Auth] Login User'),
  LOGIN_SUCCESS: type('[Auth] Login User Success'),
  LOGIN_FAILURE: type('[Auth] Login User Failure'),
  LOGOUT: type('[Auth] Logout User')
};

export class LoginAction implements Action {
  public readonly type = ActionTypes.LOGIN;

  constructor(public payload: User) { }
}

export class LoginSuccessAction implements Action {
  public readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: User) { }
}

export class LoginFailureAction implements Action {
  public readonly type = ActionTypes.LOGIN_FAILURE;

  constructor(public payload: string) { }
}

export class LogoutAction implements Action {
  public readonly type = ActionTypes.LOGOUT;
}

export type Actions
  = LoginAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;
