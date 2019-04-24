import { all, fork } from 'redux-saga/effects';
import charitySagas from './sagas/charitySagas';
import donationSagas from './sagas/donationSagas';

function* sagas() {
  yield all([
    fork(charitySagas),
    fork(donationSagas)
  ]);
}

export default sagas;
