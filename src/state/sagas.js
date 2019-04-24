import { all, fork } from 'redux-saga/effects';
import charitySagas from './sagas/charitySagas';

function* sagas() {
  yield all([
    fork(charitySagas)
  ]);
}

export default sagas;
