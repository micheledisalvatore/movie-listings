/* eslint-env jest */

import { GET_MOVIES_SUCCESS, FILTER_MOVIE_RATING } from '../constants/movies';

import movies from './movies';

describe('Given a movies reducer', () => {

  describe('when a state is passed', () => {
    let initState;

    beforeEach(() => {
      initState = {
        list: { 0: 'a' },
        filterRating: 1,
      };
    });

    describe('and the GET_MOVIES_SUCCESS action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = movies(initState, {
          type: GET_MOVIES_SUCCESS,
          movies: { 1: 'b' },
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: { 0: 'a', 1: 'b' },
          filterRating: 1,
        });
      });
    });

    describe('and the FILTER_MOVIE_RATING action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = movies(initState, {
          type: FILTER_MOVIE_RATING,
          rating: 2,
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: { 0: 'a' },
          filterRating: 2,
        });
      });
    });
  });

  describe('when the state is NOT passed', () => {
    let initState;
    describe('and the GET_MOVIES_SUCCESS action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = movies(initState, {
          type: GET_MOVIES_SUCCESS,
          movies: { 1: 'b' },
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: { 1: 'b' },
          filterRating: 0,
        });
      });
    });

    describe('and the FILTER_MOVIE_RATING action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = movies(initState, {
          type: FILTER_MOVIE_RATING,
          rating: 2,
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: {},
          filterRating: 2,
        });
      });
    });
  });
});
