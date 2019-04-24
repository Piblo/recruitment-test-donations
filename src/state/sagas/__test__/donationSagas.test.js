import { all, takeLatest, call, put } from 'redux-saga/effects';
import donationSagas, { fetchDonations } from '../donationSagas';
import * as donationActions from '../../actions/donationActions';
import { charityApi } from '../../../api';

describe('donationSagas', () => {
  it('Watches the expected action types', () => {
    const generator = donationSagas();
    const expectedYield = all([
      takeLatest(donationActions.DONATIONS_FETCH, fetchDonations)
    ]);

    const actualYield = generator.next().value;

    expect(actualYield).toEqual(expectedYield);
  });

  describe('fetchDonation saga', () => {
    const action = { payload: { charityId: 1 } };
    const generator = fetchDonations(action);

    it('Calls the fetch donations API endpoint', () => {
      const expectedYield = call(charityApi.fetchCharityDonations, action.payload.charityId);
      const actualYield = generator.next().value;
      expect(actualYield).toEqual(expectedYield);
    });

    it('Puts the success action after a successful call', () => {
      const response = {};
      const expectedYield = put(donationActions.fetchDonationsSuccess(response));

      const actualYield = generator.next(response).value;

      expect(actualYield).toEqual(expectedYield);
    });
  });
});
