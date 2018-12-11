import { handleActions } from 'redux-actions';
import { assocPath, merge } from 'ramda';

import { GET_GENRES_SUCCESS, SET_FILTER_GENRE } from '../constants/genres';

const defaultState = {
  list: {},
  filters: [],
};

const setGenres = (state, { genres }) => assocPath(['list'], merge(state.list, genres), state);
const setFilter = (state, { genreId }) => assocPath(['filters'], genreId, state);

export default handleActions({
  [GET_GENRES_SUCCESS]: setGenres,
  [SET_FILTER_GENRE]: setFilter,
}, defaultState);
