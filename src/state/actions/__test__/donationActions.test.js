import * as donationActions from '../donationActions.js';

describe('donationActions', () => {
  it('Creates an action to fetch the donations of a charity', () => {
    const charityId = 1;
    const expectedAction = { type: 'donations/fetch', payload: { charityId } };

    const actualAction = donationActions.fetchDonations(charityId);

    expect(actualAction).toEqual(expectedAction);
  });

  it('Creates an action for a successful fetch of donations', () => {
    const donations = [];
    const expectedAction = { type: 'donations/fetch_success', payload: donations };

    const actualAction = donationActions.fetchDonationsSuccess(donations);

    expect(actualAction).toEqual(expectedAction);
  });
});
