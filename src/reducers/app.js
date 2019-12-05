import { combineReducers } from 'redux';
import clicks from './clicks';

const appReducer = combineReducers({
  clicks
});

export default appReducer;
