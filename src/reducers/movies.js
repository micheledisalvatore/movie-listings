import { handleActions } from 'redux-actions';
import { assocPath, merge } from 'ramda';

import { GET_MOVIES_SUCCESS, FILTER_MOVIE_RATING } from '../constants/movies';

const defaultState = {
  list: {},
  filterRating: 0,
};

const setMovies = (state, { movies }) => assocPath(['list'], merge(state.list, movies), state);
const filterRating = (state, { rating }) => assocPath(['filterRating'], rating, state);

export default handleActions({
  [GET_MOVIES_SUCCESS]: setMovies,
  [FILTER_MOVIE_RATING]: filterRating,
}, defaultState);
