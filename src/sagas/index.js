import { all } from 'redux-saga/effects';

const sagas = [];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
