import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter.slice";
import userReducer from "./features/user/user.slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export default store;
