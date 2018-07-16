import { Action } from '@ngrx/store';
// import each action you created for the specific action type
import {
  FightersActions,
  FightersActionTypes,
  Get
 } from '../../actions/fighters/fighters.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// State with Entity extension
export interface State extends EntityState<any> {

}

// Entity Adapter
export const adapter: EntityAdapter<any> = createEntityAdapter<any>({

});

// Initial state - adding keys of ids and entities
export const initialState: State = adapter.getInitialState({

});


export function reducer(state = initialState, action: FightersActions): State {

  switch (action.type) {
    case FightersActionTypes.GET:
      return {
        ...state,
      };


    default:
      return state;
  }

}

export const {
  selectEntities: selectFightersEntities,
  selectAll: selectAllFighters,
  selectIds: selectSectionIds,
} = adapter.getSelectors();


