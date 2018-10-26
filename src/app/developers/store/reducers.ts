import { ActionReducerMap, createFeatureSelector, createSelector, } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as fromDevs from './developers.reducer';

export interface DevsState {
  devs: fromDevs.State;
}

export interface State extends fromRoot.State {
  devs: DevsState;
}

export const reducers: ActionReducerMap<DevsState> = {
  devs: fromDevs.reducer,
};

export const selectDevsState = createFeatureSelector<DevsState>('devs');

export const selectDevsCurrentState = createSelector(
  selectDevsState,
  (state: DevsState) => state && state.devs
);
export const getCommits = createSelector(
  selectDevsCurrentState,
  fromDevs.getCommits
);
