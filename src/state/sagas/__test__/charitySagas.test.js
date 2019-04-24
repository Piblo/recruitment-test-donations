import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as charityActions from '../../actions/charityActions';
import charitySagas, { fetchCharity } from '../charitySagas';
import { charityApi } from '../../../api';

describe('charitySagas', () => {
  it('Watches the expected action types', () => {
    const generator = charitySagas();

    const expectedYield = all([
      takeLatest(charityActions.CHARITY_FETCH, fetchCharity)
    ]);

    const actualYield = generator.next().value;
    expect(actualYield).toEqual(expectedYield);
  });

  describe('fetchCharity saga', () => {
    const action = { payload: { charityId: 1 } };
    const generator = fetchCharity(action);

    it('Calls the fetch charity API endpoint', () => {
      const expectedYield = call(charityApi.fetchCharity, action.payload.charityId);
      const actualYield = generator.next().value;
      expect(actualYield).toEqual(expectedYield);
    });

    it('Puts a success action after a successful call', () => {
      const response = {};
      const expectedYield = put(charityActions.fetchCharitySuccess(response));
      const actualYield = generator.next(response).value;
      expect(actualYield).toEqual(expectedYield);
    });
  });
});
