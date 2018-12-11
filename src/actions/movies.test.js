/* eslint-env jest */

import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  FILTER_MOVIE_RATING,
} from '../constants/movies';
import {
  getMovies,
  getMoviesSuccess,
  getMoviesFailure,
  filterRating,
} from './movies';

describe('Given the movies actions', () => {
  describe('when the getMovies action is called', () => {
    it('should return an object with GET_MOVIES type', () => {
      expect(getMovies()).toEqual({
        type: GET_MOVIES,
      });
    });
  });
  describe('when the getMoviesSuccess action is called', () => {
    it('should return an object with GET_MOVIES_SUCCESS type and the passed movies', () => {
      expect(getMoviesSuccess('foo')).toEqual({
        type: GET_MOVIES_SUCCESS,
        movies: 'foo',
      });
    });
  });
  describe('when the getMoviesFailure action is called', () => {
    it('should return an object with GET_MOVIES_FAILURE type and the passed error', () => {
      expect(getMoviesFailure('foo')).toEqual({
        type: GET_MOVIES_FAILURE,
        error: 'foo',
      });
    });
  });
  describe('when the filterRating action is called', () => {
    it('should return an object with FILTER_MOVIE_RATING type and the passed rating', () => {
      expect(filterRating('foo')).toEqual({
        type: FILTER_MOVIE_RATING,
        rating: 'foo',
      });
    });
  });
});
