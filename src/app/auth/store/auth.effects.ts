import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as auth from './auth.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { exhaustMap } from 'rxjs/operators/exhaustMap';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { of } from 'rxjs/observable/of';
import { AuthService } from '../services/auth.service';
import { User } from '../../api/models/user';
import { delay } from 'rxjs/operators/delay';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(auth.ActionTypes.LOGIN),
    delay(500),
    map((action: auth.LoginAction) => action.payload),
    exhaustMap((user: User) =>
      this.authService
        .loginRequest(user)
        .pipe(
          map((responseUser: User) => new auth.LoginSuccessAction(responseUser)),
          catchError(error => of(new auth.LoginFailureAction(error)))
        )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(auth.ActionTypes.LOGIN_SUCCESS),
    tap(() => this.router.navigate(['developer/cabinet']))
  );

  @Effect({ dispatch: false })
  logout$: Observable<Action> = this.actions$.pipe(
    ofType(auth.ActionTypes.LOGOUT),
    tap(() => this.router.navigate(['auth/login']))
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) { }
}
