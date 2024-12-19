import { Outlet, Navigate, useLocation } from "react-router-dom";
import { DashboardLayout } from "../components/layouts";
import { useAuth } from "../hooks";

function PrivateRoutes() {
  const location = useLocation();
  const { authStatus, isLoggingOut } = useAuth();

  // console.log("From private route, isloggingout", isLoggingOut);

  const redirectRoute =
    location.pathname === "/dashboard"
      ? "/login"
      : location.search
      ? `/login?redirectTo=${location.pathname}${location.search}`
      : `/login?redirectTo=${location.pathname}`;

  // console.log("redriceted to", redirectRoute);
  // console.log("authstats", authStatus);

  if (!authStatus) return <Navigate to={redirectRoute} replace={true} />;

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default PrivateRoutes;
