import * as donationsActions from '../donationsActions.js';

describe('donationsActions', () => {
  it('Creates an action to fetch the donations of a charity', () => {
    const charityId = 1;
    const expectedAction = { type: 'donations/fetch', payload: { charityId } };

    const actualAction = donationsActions.fetchDonations(charityId);

    expect(actualAction).toEqual(expectedAction);
  });

  it('Creates an action for a successful fetch of donations', () => {
    const donations = [];
    const expectedAction = { type: 'donations/fetch_success', payload: donations };

    const actualAction = donationsActions.fetchDonationsSuccess(donations);

    expect(actualAction).toEqual(expectedAction);
  });
});
