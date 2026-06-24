import { combineReducers, createStore } from "redux";
import { counterReducer } from "../Reducers/counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  composeWithDevTools(),
);
