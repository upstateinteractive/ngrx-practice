import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  select
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromFighters from './fighters/fighters.reducer';

export interface State {
  fighters: fromFighters.State;
}

export const reducers: ActionReducerMap<State> = {
  fighters: fromFighters.reducer,
};



export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
