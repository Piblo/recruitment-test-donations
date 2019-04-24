import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as donationActions from '../actions/donationActions';
import { charityApi } from '../../api';

export default function* donationSagas() {
  yield all([
    takeLatest(donationActions.DONATIONS_FETCH, fetchDonations)
  ]);
}

export function* fetchDonations(action) {
  const response = yield call(charityApi.fetchCharityDonations, action.payload.charityId);
  yield put(donationActions.fetchDonationsSuccess(response));
}
