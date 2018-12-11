import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { GET_MOVIES } from '../constants/movies';
import { getGenresSuccess, getGenresFailure } from '../actions/genres';

import { getGenresRemote, fetchGenres, watchActions } from './genres';

describe('Given a genres saga', () => {
  describe('when the GET_MOVIES action is fired', () => {
    const watchActionsGen = watchActions();

    it('should call getGenresRemote', () => {
      expect(watchActionsGen.next().value).toEqual(takeLatest(GET_MOVIES, getGenresRemote))
    })

    describe('and the getGenresRemote is invoked', () => {
      const getGenresRemoteGen = getGenresRemote();

      it('should call fetchGenres', () => {
        expect(getGenresRemoteGen.next().value).toEqual(call(fetchGenres))
      })

      it('should call the json parser', () => {
        const json = jest.fn();
        expect(getGenresRemoteGen.next({ json }).value).toEqual(call([{ json }, json]))
      })

      describe('when the flow does NOT fail', () => {
        it('should call the getGenresSuccess action', () => {
          const data = { genres: [{ id: 1 }] };
          expect(getGenresRemoteGen.next(data).value).toEqual(put(getGenresSuccess({ 1: { id: 1 }})))
        })
      })

      describe('when the flow does fail', () => {
        it('should call the getGenresFailure action', () => {
          expect(getGenresRemoteGen.throw('error').value).toEqual(put(getGenresFailure('error')))
        })
      })
    })
  })
})