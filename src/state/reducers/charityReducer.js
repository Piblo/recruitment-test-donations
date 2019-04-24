import * as charityActions from '../actions/charityActions';

const defaultState = {
  loading: false,
  data: null
};

export default function charityReducer(state = defaultState, action) {
  switch (action.type) {
    case charityActions.CHARITY_FETCH:
      return {
        ...state,
        loading: true
      };
    case charityActions.CHARITY_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    default:
      return state;
  }
}
