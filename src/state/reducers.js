import { combineReducers } from 'redux';
import charityReducer from './reducers/charityReducer';
import donationsReducer from './reducers/donationsReducer';

export default combineReducers({
  charity: charityReducer,
  donation: donationsReducer
});
