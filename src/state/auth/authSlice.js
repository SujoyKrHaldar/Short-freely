import { createSlice } from "@reduxjs/toolkit";
import authAction from "./authAction";

const initialState = {
  authStatus: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: authAction.login,
    LOGOUT: authAction.Logout,
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;
export const authReducers = authSlice.reducer;
