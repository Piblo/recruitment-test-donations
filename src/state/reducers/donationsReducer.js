import * as donationActions from '../actions/donationActions';

export default function donationsReducer(state = defaultState, action) {
  switch (action.type) {
    case donationActions.DONATIONS_FETCH:
      return {
        ...state,
        loading: true
      };
    case donationActions.DONATIONS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    default:
      return state;
  }
}

const defaultState = {
  loading: false,
  data: null
};
