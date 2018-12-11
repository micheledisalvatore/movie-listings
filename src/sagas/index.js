import { all } from 'redux-saga/effects';

import genres from './genres';
import movies from './movies';

const sagas = [
  genres,
  movies,
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
