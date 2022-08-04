import { combineReducers  } from "redux";
import peepReducer from './peeps/Peeps.reducers';

export default combineReducers({
  peeps: peepReducer
});