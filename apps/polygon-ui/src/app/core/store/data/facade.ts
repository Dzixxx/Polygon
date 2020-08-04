import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// reducer 
import { State as DataState } from './reducer';
// selectors 
import * as DataSelectors from './selectors';
// actions
import { Test, TestBatched, TestTwice } from './actions';

@Injectable({
    providedIn: 'root',
  })
export class DataFacade {
  test$ = this.store.select(DataSelectors.getTest);
  testTwice$ = this.store.select(DataSelectors.getTestTwice);

  constructor(private store: Store<DataState>) {}

  runTest() {
    this.store.dispatch(new Test());
  }
  
  runBatch() {
    this.store.dispatch(new TestBatched([ new Test(), new TestTwice()]));
  }
}