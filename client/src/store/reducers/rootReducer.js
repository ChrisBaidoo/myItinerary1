import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import authReducer from "../reducers/authReducers.js";
import errorReducer from "../reducers/errorReducers.js";
// const rootReducer = combineReducers({ city: cityReducer });
// const rootReducer = combineReducers({ });

export default combineReducers({
  city: cityReducer,
  itinerary: itineraryReducer,
  auth: authReducer,
  errors: errorReducer
});
