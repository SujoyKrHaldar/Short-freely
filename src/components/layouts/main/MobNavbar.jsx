/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { mainHeaderNavlinks as navLinks } from "../../../utils/constants";
import { useAuth, useLogout } from "../../../hooks";
import { X as Close } from "lucide-react";

function MobNavbar({ closeMenu, isMenuOpen }) {
  const { authStatus } = useAuth();
  const { logout } = useLogout();

  return (
    <section
      className={` laptop:hidden ${
        isMenuOpen ? " opacity-100" : " opacity-0"
      } fixed inset-0 w-screen h-screen bg-[#38383882] ease-in duration-200 pointer-events-none`}
    >
      <div
        className={`flex items-center justify-center absolute w-[90%] tablet:w-[65%] h-full top-0 right-0 bg-white p-16 ease-in-out duration-200 ${
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
        <div className="p-2 tablet:p-8 w-full h-fit space-y-16">
          <p className="uppercase tracking-[0.5rem] text-sm font-medium">
            Menu
          </p>
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <Link
                onClick={closeMenu}
                className="mob-nav-link block font-bold text-3xl tablet:text-4xl"
                key={link.name}
                to={link.url}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="space-y-4">
            <Link
              onClick={closeMenu}
              className="mob-nav-link block font-medium text-2xl tablet:text-3xl"
              to={authStatus ? "/dashboard/create" : "/login"}
            >
              {authStatus ? "Create Link" : "Login"}
            </Link>
            <Link
              onClick={closeMenu}
              className="mob-nav-link block font-medium text-2xl tablet:text-3xl"
              to={authStatus ? "/dashboard" : "/signup"}
            >
              {authStatus ? "Dashboard" : "Signup"}
            </Link>

            {authStatus && (
              <button
                onClick={logout}
                className="mob-nav-link block font-medium text-2xl tablet:text-3xl"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobNavbar;
