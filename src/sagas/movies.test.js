/* eslint-env jest */

import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { GET_MOVIES } from '../constants/movies';
import { getMoviesSuccess, getMoviesFailure } from '../actions/movies';

import { getMoviesRemote, fetchMovies, watchActions } from './movies';

describe('Given a movies saga', () => {
  describe('when the GET_MOVIES action is fired', () => {
    const watchActionsGen = watchActions();

    it('should call getMoviesRemote', () => {
      expect(watchActionsGen.next().value).toEqual(takeLatest(GET_MOVIES, getMoviesRemote));
    });

    describe('and the getMoviesRemote is invoked', () => {
      const getMoviesRemoteGen = getMoviesRemote();

      it('should call fetchMovies', () => {
        expect(getMoviesRemoteGen.next().value).toEqual(call(fetchMovies));
      });

      it('should call the json parser', () => {
        const json = jest.fn();
        expect(getMoviesRemoteGen.next({ json }).value).toEqual(call([{ json }, json]));
      });

      describe('when the flow does NOT fail', () => {
        it('should call the getMoviesSuccess action', () => {
          const data = { results: [{ id: 1 }] };
          expect(getMoviesRemoteGen.next(data).value)
            .toEqual(put(getMoviesSuccess({ 1: { id: 1 } })));
        });
      });

      describe('when the flow does fail', () => {
        it('should call the getMoviesFailure action', () => {
          expect(getMoviesRemoteGen.throw('error').value).toEqual(put(getMoviesFailure('error')));
        });
      });
    });
  });
});
