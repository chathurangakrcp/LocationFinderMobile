// reducers.js
import { combineReducers } from 'redux';
import suggessionReducer from './suggessions';
import locationReducer from './location';

const rootReducer = combineReducers({
  suggessions: suggessionReducer,
  locations: locationReducer
});

export default rootReducer;
