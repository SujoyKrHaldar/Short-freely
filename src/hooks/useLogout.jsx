/* eslint-disable no-unused-vars */
import useNotification from "./useNotification";
import { responseStatus } from "../utils/constants";
import { logoutUser } from "../api/authService";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const { logout: removeUserDataFromClient, setLoggingOut } = useAuth();
  const notify = useNotification();
  const navigate = useNavigate();

  const logout = async () => {
    const loginNotification = sessionStorage.getItem("isLoggedin");
    if (loginNotification) sessionStorage.removeItem("isLoggedin");

    try {
      // setLoggingOut(true);
      notify({
        message: `Please wait....`,
        type: responseStatus.WARNING,
        timeout: 3000,
      });

      await logoutUser();
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
    }
  };

  return { logout };
}

export default useLogout;
