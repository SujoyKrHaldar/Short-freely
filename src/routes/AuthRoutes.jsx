import { Outlet, Navigate } from "react-router-dom";
import { useAuth, useQueryParams } from "../hooks";
import { MainLayout } from "../components/layouts";

function AuthRoutes() {
  const { authStatus } = useAuth();
  const queryParams = useQueryParams("redirectTo");

  const redirectRoute = queryParams ? `${queryParams}` : "/dashboard";

  if (authStatus) return <Navigate to={redirectRoute} />;

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default AuthRoutes;
