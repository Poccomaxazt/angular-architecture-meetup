import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../api/models/user';
import { ApiService } from '../../api/services/api.service';
import * as fromAuth from '../store/reducers';
import { select, Store } from '@ngrx/store';
import * as auth from '../store/auth.actions';

@Injectable()
export class AuthService {

  constructor(
    private api: ApiService,
    private store: Store<fromAuth.State>
  ) {
  }

  public loginRequest(user: User): Observable<User> {
    return this.api.login(user);
  }

  public login(user: User): void {
    this.store.dispatch(new auth.LoginAction(user));
  }

  public logout(): void {
    this.store.dispatch(new auth.LogoutAction());
  }

  public isLoading(): Observable<boolean> {
    return this.store.pipe(select(fromAuth.getLoading));
  }

  public getLoggedIn(): Observable<boolean> {
    return this.store.pipe(select(fromAuth.getLoggedIn));
  }

  public getUserData(): Observable<User> {
    return this.store.pipe(select(fromAuth.getUser));
  }
}
