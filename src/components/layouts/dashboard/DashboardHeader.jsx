/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../../../assets/svgs/Logo";
import { Menu, Search } from "lucide-react";

function DashboardHeader({ openMenu }) {
  return (
    <header className="fixed w-full z-20 pointer-events-none bg-zinc-100">
      <div className="container flex items-center justify-between gap-8 py-4 ">
        <Link className="pointer-events-auto" to="/">
          <Logo />
        </Link>

        <nav className="flex items-center gap-2 pointer-events-auto">
          <Link
            to="/dashboard/search"
            className="p-[0.65rem] bg-white border border-zinc-400"
          >
            <Search color="black" size={25} className="opacity-60" />
          </Link>

          <Link
            className="px-5 py-3 bg-white border text-black border-zinc-400 hidden mobile:block"
            to="/dashboard/create"
          >
            <p className="text-[0.9rem]">
              <span className="pr-2">+</span> Create short Link
            </p>
          </Link>

          <button
            onClick={openMenu}
            className="p-[0.65rem] bg-white border border-zinc-400"
          >
            <Menu color="black" size={25} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default DashboardHeader;
