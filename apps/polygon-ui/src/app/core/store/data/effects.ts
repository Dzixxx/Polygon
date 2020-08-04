import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// ramda

// rx
import { tap } from 'rxjs/operators';
// ngrx
import { Effect, Actions, ofType } from '@ngrx/effects';
// action
import { ActionTypes, Test } from './actions';


@Injectable()
export class DataEffects {

  @Effect({ dispatch: false })
  public test$ = this.actions$.pipe(
    ofType(ActionTypes.TestAction),
    tap((action: Test) => {
      console.log("test effect");
    })
  );

  constructor(
    private actions$: Actions,
    // resources
  ) {}
}
