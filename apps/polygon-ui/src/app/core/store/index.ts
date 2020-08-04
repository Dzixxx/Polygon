import { ActionReducerMap } from '@ngrx/store';

import { State as RootState } from '../../root.ngrx';
import { State as DataState, reducer as DataReducer } from './data/reducer';

export interface CoreState {
  data: DataState;
}

export interface State extends RootState {
  core: CoreState;
}

export const reducers: ActionReducerMap<CoreState> = {
  data: DataReducer,
};
