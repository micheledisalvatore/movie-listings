import { combineReducers } from 'redux';

import genres from './genres';
import movies from './movies';

const appReducer = combineReducers({
  genres,
  movies,
});

export default appReducer;
