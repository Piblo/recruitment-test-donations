import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as donationsActions from '../actions/donationsActions';
import { charityApi } from '../../api';

export default function* donationSagas() {
  yield all([
    takeLatest(donationsActions.DONATIONS_FETCH, fetchDonations)
  ]);
}

export function* fetchDonations(action) {
  const response = yield call(charityApi.fetchCharityDonations, action.payload.charityId);
  yield put(donationsActions.fetchDonationsSuccess(response));
}
