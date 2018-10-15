import { combineReducers } from 'redux';
// import counter from './counter';
import userReducer from './user_reducer';
//load redux-form plugin
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  user:userReducer,form: formReducer
});
