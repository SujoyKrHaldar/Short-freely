import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/svgs/Logo";
import { mainHeaderNavlinks as navLinks } from "../../../utils/constants";

function Navbar() {
  const { isScrollingDown } = useScrollEvent();

  const user = false;

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
                className="hover:bg-zinc-100 py-3 px-5 duration-150"
                key={link.name}
                to={link.url}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <nav className="flex items-center gap-2">
          {user ? (
            <>
              <Link
                className="duration-150 px-6 py-3 hover:bg-zinc-100"
                to="/dashboard/create"
              >
                Create Link
              </Link>

              <Link to="/dashboard">
                <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
              </Link>
            </>
          ) : (
            <>
              <NavLink
                className="duration-150 px-6 py-3 hover:bg-zinc-100"
                to="/login"
              >
                Login
              </NavLink>

              <Link className="bg-black text-white px-6 py-3" to="/signup">
                Signup - <span className=" italic font-light">Its free</span>
              </Link>
            </>
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
