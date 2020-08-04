import { ActionTypes, ReducerActions } from './actions';

//
// Reducer - normalized
//
export interface State {
  test: boolean;
  testTwice: boolean;
}

export const initialState: State = {
  test: false,
  testTwice: false,
};
export function reducer(state = initialState, action: ReducerActions): State {
  switch (action.type) {
    case ActionTypes.TestAction: {
      return {
        ...state,
        test: true,
      };
    }
    case ActionTypes.TestTwiceAction: {
      return {
        ...state,
        testTwice: true,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
