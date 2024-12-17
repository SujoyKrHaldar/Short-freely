import { createSlice } from "@reduxjs/toolkit";
import authAction from "./authAction";

const initialState = {
  authStatus: false,
  userData: null,
  isLoggingOut: false,
  // redirectOnLogout: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: authAction.login,
    LOGOUT: authAction.Logout,
    SET_LOGGING_OUT: authAction.setLoggingOut,
  },
});

export const { LOGIN, LOGOUT, SET_LOGGING_OUT } = authSlice.actions;
export const authReducers = authSlice.reducer;
