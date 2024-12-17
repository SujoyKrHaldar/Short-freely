import { useDispatch, useSelector } from "react-redux";
import { LOGIN, LOGOUT, SET_LOGGING_OUT } from "../state";

const useAuth = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.authStatus);
  const isLoggingOut = useSelector((state) => state.auth.isLoggingOut);
  const userData = useSelector((state) => state.auth.userData);

  const login = (user) => {
    dispatch(LOGIN(user));
  };

  const logout = () => {
    dispatch(LOGOUT());
  };

  const setLoggingOut = (booleanValue) => {
    dispatch(SET_LOGGING_OUT(booleanValue));
  };

  return { authStatus, isLoggingOut, userData, login, logout, setLoggingOut };
};

export default useAuth;
