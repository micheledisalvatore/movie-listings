import React from 'react';
import { Provider } from 'react-redux';

import Main from './layouts/main';

import { store } from './config/store';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
