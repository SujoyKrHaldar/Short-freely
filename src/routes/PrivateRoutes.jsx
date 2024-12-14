import { Outlet, Navigate, useLocation } from "react-router-dom";
import { DashboardLayout } from "../components/layouts";
import { useAuth } from "../hooks";

function PrivateRoutes() {
  const location = useLocation();
  const { authStatus } = useAuth();

  const redirectRoute =
    location.pathname === "/dashboard"
      ? "/login"
      : location.search
      ? `/login?redirectTo=${location.pathname}${location.search}`
      : `/login?redirectTo=${location.pathname}`;

  if (!authStatus) return <Navigate to={redirectRoute} />;

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default PrivateRoutes;
