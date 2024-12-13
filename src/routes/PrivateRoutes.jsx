import { Outlet, Navigate } from "react-router-dom";
import { DashboardLayout } from "../components/layouts";
import { useAuth } from "../hooks";

function PrivateRoutes() {
  const { authStatus } = useAuth();
  if (!authStatus) return <Navigate to="/login" />;

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default PrivateRoutes;
