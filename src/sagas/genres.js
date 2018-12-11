import {
  call,
  fork,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { GET_MOVIES } from '../constants/movies';
import { getGenresSuccess, getGenresFailure } from '../actions/genres';
import genreSchema from '../schemas/genre';

export const fetchGenres = () => window.fetch(`${process.env.REACT_APP_API_PREFIX}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

export function* getGenresRemote() {
  try {
    const response = yield call(fetchGenres);
    const data = yield call([response, response.json]);

    const {
      entities: {
        genres,
      },
    } = normalize(data.genres, [genreSchema]);

    yield put(getGenresSuccess(genres));
  } catch (e) {
    yield put(getGenresFailure(e));
  }
}

export function* watchActions() {
  yield takeLatest(GET_MOVIES, getGenresRemote);
}

export default fork(watchActions);
