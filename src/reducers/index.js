import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import classReducer from "./classReducer";
import modelReducer from "./modelReducer";
import EventReducer from "./EventReducer"
import DetailsReducer from "./DetailsReducer"
export default combineReducers({DetailsReducer,EventReducer,
  auth: authReducer,
  errors: errorReducer,
  classReducer,
  modelReducer,
});
