import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/svgs/Logo";
import { mainHeaderNavlinks as navLinks } from "../../../utils/constants";
import { useAuth } from "../../../hooks";

function Navbar() {
  const { isScrollingDown } = useScrollEvent();
  const { authStatus } = useAuth();

  return (
    <section
      className={`relative ease-in-out duration-300 bg-white border-b border-zinc-300
      ${
        isScrollingDown
          ? " -translate-y-1/4 opacity-0 pointer-events-none "
          : "opacity-100 translate-y-0 pointer-events-auto "
      }`}
    >
      <div className="container flex items-center justify-between gap-8 py-3">
        <div className="flex items-center gap-4">
          <Link className="pl-2 pr-4 border-r border-r-zinc-200" to="/">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            
            {navLinks.map((link) => (
              <NavLink
                className="hover:bg-zinc-100 py-3 px-5 duration-150 text-[0.9rem]"
                key={link.name}
                to={link.url}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <nav className="flex items-center gap-2">
          <NavLink
            className="duration-150 px-6 py-3 bg-zinc-200 hover:bg-zinc-100 text-[0.9rem]"
            to={authStatus ? "/dashboard/create" : "/login"}
          >
            {authStatus ? "Create New Link" : "Login"}
          </NavLink>

          {authStatus ? (
            <Link
              className="bg-black text-white px-6 py-3 text-[0.9rem]"
              to="/dashboard"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              className="bg-black text-white px-6 py-3 text-[0.9rem]"
              to="/signup"
            >
              Signup - <span className=" italic font-light">Its free</span>
            </Link>
          )}

          <Menu
            color="black"
            className="ml-2 cursor-pointer lg:hidden"
            size={40}
          />
        </nav>
      </div>
    </section>
  );
}

const useScrollEvent = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = Math.floor(window.scrollY);

      if (currentScrollPos < 0) return;

      if (currentScrollPos > prevScrollPos) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return { isScrollingDown };
};

export default Navbar;
