import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { MainLayout } from "../components/layouts";

function AuthRoutes() {
  const { authStatus } = useAuth();
  if (authStatus) return <Navigate to="/dashboard" />;

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default AuthRoutes;
