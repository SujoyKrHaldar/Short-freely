const authAction = {
  login: (state, action) => {
    state.authStatus = true;
    state.userData = action.payload;
  },
  Logout: (state) => {
    state.authStatus = false;
    state.userData = null;
  },
};

export default authAction;
