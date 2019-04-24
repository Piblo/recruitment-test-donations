import donationsReducer from '../donationsReducer';
import * as donationActions from '../../actions/donationActions';

describe('donationsReducer', () => {
  it('Sets the expected default state', () => {
    const actualState = donationsReducer(undefined, {});
    expect(actualState).toEqual(defaultState);
  });

  it('Sets the expected state for a donations fetch action', () => {
    const action = { type: donationActions.DONATIONS_FETCH };
    const expectedState = {
      ...defaultState,
      loading: true
    };

    const actualState = donationsReducer(defaultState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('Sets the expected state for a successful fetch action', () => {
    const action = { type: donationActions.DONATIONS_FETCH_SUCCESS, payload: {}};
    const currentState = {
      ...defaultState,
      loading: true,
    };

    const expectedState = {
      ...currentState,
      loading: false,
      data: action.payload
    };

    const actualState = donationsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });
});

const defaultState = {
  loading: false,
  data: []
};
