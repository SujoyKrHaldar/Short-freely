import { configureStore } from "@reduxjs/toolkit";
import { authReducers, notificationReducer } from "./rootReducer";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    auth: authReducers,
  },
});

export default store;
