import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./reducers/itineraryReducer";
import activitiesReducer from "./reducers/activityReducer";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import commentsReducer from "./reducers/commentsReducer";
const rootReducer = combineReducers({cities: citiesReducer,itineraries: itineraryReducer,activities: activitiesReducer, user: userReducer, auth: authReducer, comments: commentsReducer, });


export default rootReducer;