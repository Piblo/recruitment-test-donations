import * as charityActions from '../charityActions';

describe('charityActions', () => {
  it('Creates an action to fetch the details of a charity', () => {
    const charityId = 1;
    const expectedAction = { type: 'charity/fetch', payload: { charityId } };

    const actualAction = charityActions.fetchCharity(charityId);

    expect(actualAction).toEqual(expectedAction);
  });

  it('Creates an action for a successful fetch of charity details', () => {
    const charity = {};
    const expectedAction = { type: 'charity/fetch_success', payload: charity };

    const actualAction = charityActions.fetchCharitySuccess(charity);

    expect(actualAction).toEqual(expectedAction);
  });
});
