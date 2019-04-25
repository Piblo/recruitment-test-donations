import * as donationsActions from '../actions/donationsActions';

export default function donationsReducer(state = defaultState, action) {
  switch (action.type) {
    case donationsActions.DONATIONS_FETCH:
      return {
        ...state,
        loading: true
      };
    case donationsActions.DONATIONS_FETCH_SUCCESS:
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
  data: []
};
