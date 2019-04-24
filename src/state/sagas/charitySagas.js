import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as charityActions from '../actions/charityActions';
import { charityApi } from '../../api';

export default function* charitySagas() {
  yield all([
    takeLatest(charityActions.CHARITY_FETCH, fetchCharity)
  ]);
}

export function* fetchCharity(action) {
  const response = yield call(charityApi.fetchCharity, action.payload.charityId);
  yield put(charityActions.fetchCharitySuccess(response));
}
