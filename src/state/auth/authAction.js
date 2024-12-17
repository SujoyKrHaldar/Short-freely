const authAction = {
  login: (state, action) => {
    state.authStatus = true;
    state.userData = action.payload;
  },
  Logout: (state) => {
    state.authStatus = false;
    state.userData = null;
  },
  setLoggingOut(state, action) {
    state.isLoggingOut = action.payload;
  },
};

export default authAction;
