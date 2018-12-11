import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  FILTER_MOVIE_RATING,
} from '../constants/movies';

export const getMovies = () => ({
  type: GET_MOVIES,
});

export const getMoviesSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  movies,
});

export const getMoviesFailure = (error) => ({
  type: GET_MOVIES_FAILURE,
  error,
});

export const filterRating = (rating) => ({
  type: FILTER_MOVIE_RATING,
  rating,
});
