import {
  GET_GENRES,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE,
  SET_FILTER_GENRE,
} from '../constants/genres';

export const getGenres = () => ({
  type: GET_GENRES,
});

export const getGenresSuccess = genres => ({
  type: GET_GENRES_SUCCESS,
  genres,
});

export const getGenresFailure = error => ({
  type: GET_GENRES_FAILURE,
  error,
});

export const setFilterGenres = genreId => ({
  type: SET_FILTER_GENRE,
  genreId,
});
