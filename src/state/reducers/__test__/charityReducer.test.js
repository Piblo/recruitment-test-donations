import charityReducer from '../charityReducer';
import * as charityActions from '../../actions/charityActions';

describe('charityReducer', () => {
  it('Sets the expected default state', () => {
    const actualState = charityReducer(undefined, {});
    expect(actualState).toEqual(defaultState);
  });

  it('Sets the expected state for a charity fetch action', () => {
    const action = { type: charityActions.CHARITY_FETCH };
    const expectedState = {
      ...defaultState,
      loading: true
    };

    const actualState = charityReducer(defaultState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('Sets the expected state for a charity fetch action', () => {
    const action = { type: charityActions.CHARITY_FETCH_SUCCESS, payload: {} };
    const currentState = {
      ...defaultState,
      loading: true
    };

    const expectedState = {
      ...defaultState,
      loading: false,
      data: action.payload
    };

    const actualState = charityReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });
});

const defaultState = {
  loading: false,
  data: null
};
