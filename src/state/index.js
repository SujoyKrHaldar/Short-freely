import { LOGIN, LOGOUT, SET_LOGGING_OUT } from "./auth/authSlice";
import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "./notification/notificationSlice";
import store from "./store";

export {
  store,
  LOGIN,
  LOGOUT,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SET_LOGGING_OUT,
};
