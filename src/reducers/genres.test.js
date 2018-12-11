/* eslint-env jest */

import { GET_GENRES_SUCCESS, SET_FILTER_GENRE } from '../constants/genres';

import genres from './genres';

describe('Given a genres reducer', () => {

  describe('when a state is passed', () => {
    let initState;

    beforeEach(() => {
      initState = {
        list: { 0: 'a' },
        filters: [1],
      };
    });

    describe('and the GET_GENRES_SUCCESS action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = genres(initState, {
          type: GET_GENRES_SUCCESS,
          genres: { 1: 'b' },
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: { 0: 'a', 1: 'b' },
          filters: [1],
        });
      });
    });

    describe('and the SET_FILTER_GENRE action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = genres(initState, {
          type: SET_FILTER_GENRE,
          genreId: [1, 2],
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: { 0: 'a' },
          filters: [1, 2],
        });
      });
    });
  });

  describe('when the state is NOT passed', () => {
    let initState;
    describe('and the GET_GENRES_SUCCESS action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = genres(initState, {
          type: GET_GENRES_SUCCESS,
          genres: { 1: 'b' },
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: { 1: 'b' },
          filters: [],
        });
      });
    });

    describe('and the SET_FILTER_GENRE action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = genres(initState, {
          type: SET_FILTER_GENRE,
          genreId: [1, 2],
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: {},
          filters: [1, 2],
        });
      });
    });
  });
});
