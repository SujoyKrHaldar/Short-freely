/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { dashboardSidebarNavlinks as navLinks } from "../../../utils/constants";
import { useLogout } from "../../../hooks";
import { X as Close } from "lucide-react";

function DashboardSidebar({ closeMenu, isMenuOpen }) {
  const { logout } = useLogout();

  return (
    <section
      className={`z-30 ${
        isMenuOpen ? " opacity-100" : " opacity-0"
      } fixed inset-0 w-screen h-screen bg-[#38383882] ease-in duration-200 pointer-events-none`}
    >
      <div
        className={`flex items-center justify-center absolute h-full top-0 right-0 bg-white p-16 ease-in-out duration-200 ${
          isMenuOpen
            ? " translate-x-0 pointer-events-auto"
            : " translate-x-full pointer-events-none"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 p-[0.70rem] bg-black"
        >
          <Close size={25} color="white" />
        </button>
        <div className="p-2 tablet:p-8 w-full h-fit space-y-8">
          <p className="uppercase tracking-[0.5rem] text-sm font-medium">
            Menu
          </p>
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <Link
                onClick={closeMenu}
                className="mob-nav-link block font-bold text-3xl"
                key={link.name}
                to={link.url}
              >
                {link.name}
              </Link>
            ))}

            <Link
              className="mob-nav-link block font-bold text-3xl"
              onClick={logout}
            >
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default DashboardSidebar;
