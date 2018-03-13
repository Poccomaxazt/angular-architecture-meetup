import { Injectable } from '@angular/core';
import {DevelopersFactoryService} from './developers-factory.service';
import * as fromAuth from '../../auth/store/reducers';
import * as fromDevs from '../store/reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Developer} from '../developer-types/developer';
import {map} from 'rxjs/operators/map';
import {filter} from 'rxjs/operators/filter';
import {User} from '../../api/models/user';
import * as devs from '../store/developers.actions';

@Injectable()
export class DevelopersService {

  constructor(
    private developersFactory: DevelopersFactoryService,
    private store: Store<fromAuth.State | fromDevs.State>
  ) { }

  public getDeveloper(): Observable<Developer> {
    return this.store.pipe(
      select(fromAuth.getUser),
      filter(Boolean),
      map((u: User) => this.developersFactory.create(u.technology, this))
    );
  }

  public getCommits(): Observable<number> {
    return this.store.pipe(select(fromDevs.getCommits));
  }

  public makeCommit(): void {
    this.store.dispatch(new devs.CommitAction());
  }

}
