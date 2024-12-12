import { Outlet } from "react-router-dom";
import { MainLayout } from "../components/layouts";

function PublicRoutes() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default PublicRoutes;
