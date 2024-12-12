import { useDispatch, useSelector } from "react-redux";
import { LOGIN, LOGOUT } from "../state";

const useAuth = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.authStatus);
  const userData = useSelector((state) => state.auth.userData);

  const login = (user) => {
    dispatch(LOGIN(user));
  };

  const logout = () => {
    dispatch(LOGOUT());
  };

  return { authStatus, userData, login, logout };
};

export default useAuth;
