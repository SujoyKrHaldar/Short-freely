import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useQueryParams } from "../hooks";
import { MainLayout } from "../components/layouts";
// import { useSelector } from "react-redux";

function AuthRoutes() {
  // const { authStatus, user } = useSelector((state) => state.auth);
  // const profileStatus = user?.isProfileActivated;

  // if (authStatus && profileStatus) return <Navigate to="/rooms" />;
  // const location = useLocation();
  // console.log(location);

  // const data = useQueryParams("redirectTo");

  // const user = true;
  // if (user) return <Navigate to={data ? `/${data}` : "/products"} />;

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default AuthRoutes;
