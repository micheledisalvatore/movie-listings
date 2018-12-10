import React from 'react';
import { Provider } from 'react-redux';

import { store } from './config/store';
const App = () => (
  <Provider store={store}>
    <div />
  </Provider>
);

export default App;
