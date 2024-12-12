import { Link } from "react-router-dom";
import { dashboardSidebarNavlinks as navLinks } from "../../../utils/constants";

function DashboardSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 w-80 max-lg:hidden pt-24 flex flex-col justify-between bg-white">
      <div className="space-y-8 px-16 pt-8 h-full">
        <p className="uppercase tracking-[0.5rem] text-xs text-zinc-400">
          Menu
        </p>

        <nav className="space-y-4">
          {navLinks.map((link) => (
            <Link className="block text-lg " key={link.name} to={link.url}>
              {link.name}
            </Link>
          ))}

          <p className="block text-lg cursor-pointer">Logout</p>
        </nav>
      </div>

      <p className="text-sm  text-zinc-500  px-16 py-8">
        &copy; 2025 - All rights reserved.
      </p>
    </aside>
  );
}

export default DashboardSidebar;
