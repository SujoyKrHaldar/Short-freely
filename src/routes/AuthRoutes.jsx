import { Outlet, Navigate } from "react-router-dom";
import { useAuth, useQueryParams } from "../hooks";
import { MainLayout } from "../components/layouts";

function AuthRoutes() {
  const { authStatus } = useAuth();
  const queryParams = useQueryParams("redirectTo");

  const redirectRoute = queryParams
    ? `${queryParams.replaceAll("%2F", "/").replace("%3A", ":")}`
    : "/dashboard";

  if (authStatus) return <Navigate to={redirectRoute} replace={true} />;

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default AuthRoutes;
