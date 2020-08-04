import { Action, createAction } from '@ngrx/store';
import { BatchAction } from 'ngrx-batch-action-reducer';

//
// Action Types
//
export enum ActionTypes {
  TestAction = `[Core - Data] Test Action`,
  TestTwiceAction = '[Core - Data] Test Action',
  TestBatched = '[Core - Data] Test Action',
}

//
// Actions
//
export class Test implements Action {
  readonly type = ActionTypes.TestAction;
  constructor() {}
}

export class TestTwice implements Action {
  readonly type = ActionTypes.TestAction;
  constructor() {}
}

//
// Batched
//
@BatchAction()
export class TestBatched implements Action {
  readonly type = ActionTypes.TestBatched;
  constructor(
    public payload: [
        Test,
        TestTwice
    ],
  ) {}
}

//
// Available actions for reducer
//
export type ReducerActions =
  | Test
  | TestTwice
  | TestBatched;

