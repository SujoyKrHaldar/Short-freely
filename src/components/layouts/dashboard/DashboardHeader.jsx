/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../../../assets/svgs/Logo";
import { Menu, Search, X } from "lucide-react";

function DashboardHeader({ handleExpand, isExpand }) {
  return (
    <header className="fixed w-full z-30 pointer-events-none">
      <div className="px-16 flex items-center justify-between gap-8 py-4 ">
        <Link className="pointer-events-auto" to="/">
          <Logo />
        </Link>

        <nav className="flex items-center gap-2 pointer-events-auto">
          <Link
            to="/dashboard/search"
            className="bg-white h-full border p-3 border-zinc-300"
          >
            <Search color="black" size={20} />
          </Link>

          <Link
            className="bg-white text-black px-5 py-3 border border-zinc-300"
            to="/dashboard/create"
          >
            <p className="text-[0.9rem]">
              <span className="pr-2">+</span> Create short Link
            </p>
          </Link>

          <div
            onClick={handleExpand}
            className="bg-white h-full border p-3 border-zinc-300 cursor-pointer"
          >
            {isExpand ? (
              <Menu color="black" size={20} />
            ) : (
              <X color="black" size={20} />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default DashboardHeader;
