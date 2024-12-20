import { useState } from "react";
import MobNavbar from "./MobNavbar";
import Navbar from "./Navbar";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className="z-40 fixed inset-0 w-full h-screen pointer-events-none flex flex-col justify-between">
      <Navbar openMenu={openMenu} />
      <MobNavbar closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;
