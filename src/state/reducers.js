import { combineReducers } from 'redux';
import charityReducer from './reducers/charityReducer';

export default combineReducers({
  charity: charityReducer
});
