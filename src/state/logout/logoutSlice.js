import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
  name: "logout",
  initialState: { isLoggingOut: false },
  reducers: {
    SET_LOGGING_OUT: (state, action) => {
      state.isLoggingOut = action.payload;
    },
  },
});

export const { SET_LOGGING_OUT } = logoutSlice.actions;
export const logoutReducer = logoutSlice.reducer;
