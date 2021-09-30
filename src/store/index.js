import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReduce from "./module/user/reduce";
const reduces = combineReducers({ user: userReduce });

const store = createStore(reduces, applyMiddleware(thunk));
export default store;
