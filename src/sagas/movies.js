import {
  call,
  fork,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { GET_MOVIES } from '../constants/movies';
import { getMoviesSuccess, getMoviesFailure } from '../actions/movies';
import movieSchema from '../schemas/movie';

export const fetchMovies = () => window.fetch(`${process.env.REACT_APP_API_PREFIX}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

export function* getMoviesRemote() {
  try {
    const response = yield call(fetchMovies);
    const { results } = yield call([response, response.json]);

    const {
      entities: {
        movies,
      },
    } = normalize(results, [movieSchema]);

    yield put(getMoviesSuccess(movies));
  } catch (e) {
    yield put(getMoviesFailure(e));
  }
}

export function* watchActions() {
  yield takeLatest(GET_MOVIES, getMoviesRemote);
}

export default fork(watchActions);
