import { createSlice } from "@reduxjs/toolkit";
import notificationAction from "./notificationAction";

const notificationSlice = createSlice({
  name: "notification",
  initialState: [],
  reducers: {
    ADD_NOTIFICATION: notificationAction.addNotification,
    REMOVE_NOTIFICATION: notificationAction.removeNotification,
  },
});

export const { ADD_NOTIFICATION, REMOVE_NOTIFICATION } =
  notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;
