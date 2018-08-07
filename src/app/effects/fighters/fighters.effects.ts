import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { State } from '../../reducers';
import {
  FightersActions,
  FightersActionTypes,
  Get,
  } from '../../actions/fighters/fighters.actions';

import { errorHandler } from '../errorHandler';


@Injectable()
export class FightersEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<State>,
    private router: Router,
  ) {}

  // @Effect()
   // add effect code here

} // end Fighters Effects
