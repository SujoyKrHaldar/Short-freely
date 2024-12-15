/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import {
  dashboardSidebarNavlinks as navLinks,
  responseStatus,
} from "../../../utils/constants";
import { logoutUser } from "../../../api/authService";
import { useNotification, useAuth } from "../../../hooks";

function DashboardSidebar() {
  const { logout: removeUserDataFromClient } = useAuth();
  const notify = useNotification();
  const { pathname } = useLocation();

  const handleLogout = async () => {
    const loginNotification = sessionStorage.getItem("isLoggedin");
    if (loginNotification) sessionStorage.removeItem("isLoggedin");

    try {
      notify({
        message: `Please wait....`,
        type: responseStatus.WARNING,
        timeout: 5000,
      });

      await logoutUser();
      removeUserDataFromClient();

      notify({
        message: `Logout successful`,
        type: responseStatus.SUCCESS,
        timeout: 5000,
      });
    } catch (_) {
      notify({
        message: "Logout failed. Please try again later.",
        type: responseStatus.ERROR,
        timeout: 5000,
      });
    }
  };

  return (
    <aside className="fixed inset-y-0 left-0 w-80 max-lg:hidden pt-24 flex flex-col justify-between bg-white">
      <div className="space-y-8 px-16 pt-8 h-full">
        <p className="uppercase tracking-[0.5rem] text-xs text-zinc-400">
          Menu
        </p>

        <nav className="space-y-4">
          {navLinks.map((link) => (
            <Link
              className={`block text-lg duration-200 ${
                pathname === link.url
                  ? "text-black font-medium"
                  : "text-zinc-400"
              }`}
              key={link.name}
              to={link.url}
            >
              {link.name}
            </Link>
          ))}

          <p
            onClick={handleLogout}
            className="block text-lg cursor-pointer text-zinc-400"
          >
            Logout
          </p>
        </nav>
      </div>

      <p className="text-sm  text-zinc-500  px-16 py-8">
        &copy; 2025 - All rights reserved.
      </p>
    </aside>
  );
}

export default DashboardSidebar;
