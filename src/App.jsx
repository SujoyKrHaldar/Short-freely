/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Logo from "./assets/svgs/Logo";
import { useEffect, useState } from "react";
import { getCurrentUser } from "./api/authService";
import { useAuth, useNotification } from "./hooks";
import { responseStatus } from "./utils/constants";

function App() {
  const { loading } = useAutoLoginOnRefresh();

  return (
    <>
      <SplashScreen loading={loading} />
      {loading ? null : <Outlet />}
    </>
  );
}

const SplashScreen = ({ loading }) => {
  return (
    <section
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white duration-1000 ease-in-out
      ${
        loading
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="animate-pulse">
        <Logo />
      </div>
    </section>
  );
};

function useAutoLoginOnRefresh() {
  const [loading, setLoading] = useState(true);
  const { login: autoLogin, logout: autoLogout } = useAuth();
  const notify = useNotification();

  const checkAuth = async () => {
    const loginNotification = sessionStorage.getItem("isLoggedin");
    try {
      const currentUser = await getCurrentUser();

      if (currentUser?.status) {
        autoLogin(currentUser);

        if (!loginNotification) {
          notify({
            message: `Welcome back ${currentUser?.name}`,
            type: responseStatus.SUCCESS,
            timeout: 5000,
          });
          sessionStorage.setItem("isLoggedin", true);
        }
      } else {
        autoLogout();
        if (loginNotification) sessionStorage.removeItem("isLoggedin");
      }
    } catch (_) {
      return false;
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { loading };
}

export default App;
