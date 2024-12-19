import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoutes, PrivateRoutes, PublicRoutes } from "./routes";
import {
  Account,
  Dashboard,
  Home,
  Login,
  Signup,
  RedirectUrl,
  CreateShortUrl,
  PageNotFound,
  UrlDetails,
  SearchLinks,
  AllShortLinks,
  EditShortUrl,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PublicRoutes />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/redirect/:customSlug",
            element: <RedirectUrl />,
          },
          {
            path: "*",
            element: <PageNotFound />,
          },
        ],
      },
      {
        path: "",
        element: <AuthRoutes />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "",
        element: <PrivateRoutes />,
        children: [
          {
            path: "dashboard/account",
            element: <Account />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/create",
            element: <CreateShortUrl />,
          },
          {
            path: "/dashboard/search",
            element: <SearchLinks />,
          },
          {
            path: "/dashboard/edit/:urlId",
            element: <EditShortUrl />,
          },
          {
            path: "/dashboard/link/:urlId",
            element: <UrlDetails />,
          },
          {
            path: "/dashboard/links",
            element: <AllShortLinks />,
          },
          {
            path: "/dashboard/analytics",
            element: <UrlDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
