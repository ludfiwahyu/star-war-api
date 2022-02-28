import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import starWarsReducer from "./reducers/starWars";

const store = createStore(
  combineReducers({
    starWars: starWarsReducer,
  }),
  applyMiddleware(thunk)
);
 
export default store;