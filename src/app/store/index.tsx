import { createStore } from 'redux';
import { defaultState, DefaultState } from '../../server/defaultState';

export const store = createStore(
  function reducer(state: DefaultState = defaultState, action) {
    return state;
  }
);