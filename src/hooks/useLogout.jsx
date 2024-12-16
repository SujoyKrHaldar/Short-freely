/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGGING_OUT } from "../state";
import useNotification from "./useNotification";
import { responseStatus } from "../utils/constants";
import { logoutUser } from "../api/authService";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const dispatch = useDispatch();
  const { logout: removeUserDataFromClient } = useAuth();
  const isLoggingOut = useSelector((state) => state.logout.isLoggingOut);
  const notify = useNotification();
  const navigate = useNavigate();

  const logout = async () => {
    const loginNotification = sessionStorage.getItem("isLoggedin");
    if (loginNotification) sessionStorage.removeItem("isLoggedin");

    try {
      //   dispatch(SET_LOGGING_OUT(true));

      notify({
        message: `Please wait....`,
        type: responseStatus.WARNING,
        timeout: 3000,
      });

      await logoutUser();
      navigate("/signup", { replace: true });
      //   navigate("/signup");

      removeUserDataFromClient();

      notify({
        message: `Logout successful`,
        type: responseStatus.SUCCESS,
        timeout: 3000,
      });
    } catch (_) {
      notify({
        message: "Logout failed. Please try again later.",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    } finally {
      //   dispatch(SET_LOGGING_OUT(false));
    }
  };

  return { isLoggingOut, logout };
}

export default useLogout;
