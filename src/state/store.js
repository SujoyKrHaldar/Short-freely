import { configureStore } from "@reduxjs/toolkit";
import {
  authReducers,
  notificationReducer,
  logoutReducer,
} from "./rootReducer";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    logout: logoutReducer,
    auth: authReducers,
  },
});

export default store;
