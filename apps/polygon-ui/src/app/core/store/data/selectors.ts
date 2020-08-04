import { createSelector, createFeatureSelector } from '@ngrx/store';
// const ngrx
import { STORE_FEATURE_NAME } from '../../constants/ngrx';
// state
import { State } from './reducer';
import { CoreState } from '../';

const featureSelector = createFeatureSelector<CoreState>(STORE_FEATURE_NAME);
const reducerSelector = createSelector(featureSelector, (state: CoreState) => state.data);

export const getTest = createSelector(reducerSelector, (state: State) => state.test);
export const getTestTwice = createSelector(reducerSelector, (state: State) => state.testTwice);