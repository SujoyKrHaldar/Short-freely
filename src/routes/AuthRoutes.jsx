import { Outlet, Navigate } from "react-router-dom";
import { useAuth, useQueryParams } from "../hooks";
import { MainLayout } from "../components/layouts";

function AuthRoutes() {
  const { authStatus, isLoggingOut, setLoggingOut } = useAuth();
  const queryParams = useQueryParams("redirectTo");

  // console.log("From auth route, isloggingout", isLoggingOut);

  const redirectRoute = queryParams
    ? `${queryParams.replaceAll("%2F", "/").replace("%3A", ":")}`
    : "/dashboard";

  if (authStatus) return <Navigate to={redirectRoute} replace={true} />;

  // if (!authStatus) {
  //   console.log("From auth route, isloggingout is now", isLoggingOut);
  //   setLoggingOut(false);
  // }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default AuthRoutes;
