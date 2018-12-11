/* eslint-env jest */

import {
  GET_GENRES,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE,
  SET_FILTER_GENRE,
} from '../constants/genres';
import {
  getGenres,
  getGenresSuccess,
  getGenresFailure,
  setFilterGenres,
} from './genres';

describe('Given the genres actions', () => {
  describe('when the getGenres action is called', () => {
    it('should return an object with GET_GENRES type', () => {
      expect(getGenres()).toEqual({
        type: GET_GENRES,
      });
    });
  });
  describe('when the getGenresSuccess action is called', () => {
    it('should return an object with GET_GENRES_SUCCESS type and the passed genres', () => {
      expect(getGenresSuccess('foo')).toEqual({
        type: GET_GENRES_SUCCESS,
        genres: 'foo',
      });
    });
  });
  describe('when the getGenresFailure action is called', () => {
    it('should return an object with GET_GENRES_FAILURE type and the passed error', () => {
      expect(getGenresFailure('foo')).toEqual({
        type: GET_GENRES_FAILURE,
        error: 'foo',
      });
    });
  });
  describe('when the setFilterGenres action is called', () => {
    it('should return an object with SET_FILTER_GENRE type and return the passed genreId', () => {
      expect(setFilterGenres('foo')).toEqual({
        type: SET_FILTER_GENRE,
        genreId: 'foo',
      });
    });
  });
});
