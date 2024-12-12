const notificationAction = {
  addNotification: (state, action) => {
    state.push({
      id: Date.now(),
      timeout: action.payload.timeout,
      ...action.payload,
    });
  },
  removeNotification: (state, action) => {
    return state.filter((notification) => notification.id !== action.payload);
  },
};

export default notificationAction;
