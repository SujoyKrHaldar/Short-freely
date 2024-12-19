import { Link, useLocation } from "react-router-dom";
import { dashboardSidebarNavlinks as navLinks } from "../../../utils/constants";
import { useLogout } from "../../../hooks";

function DashboardSidebar() {
  const { pathname } = useLocation();
  const { logout } = useLogout();

  return (
    <aside className="fixed inset-y-0 left-0 w-80 max-lg:hidden pt-24 flex flex-col justify-between bg-white">
      <div className="space-y-8 px-16 pt-8 h-full">
        <p className="uppercase tracking-[0.5rem] text-xs text-zinc-500">
          Menu
        </p>

        <nav className="space-y-4">
          {navLinks.map((link) => (
            <Link
              className={`block text-lg duration-200 ${
                pathname === link.url ? "text-black font-bold" : "text-zinc-600"
              }`}
              key={link.name}
              to={link.url}
            >
              {link.name}
            </Link>
          ))}

          <p
            onClick={logout}
            className="block text-lg cursor-pointer text-zinc-600"
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
