import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

export const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <h1>Gr&#275;ne</h1>
    </Provider>
  );
};
