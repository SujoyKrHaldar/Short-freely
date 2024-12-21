/* eslint-disable react/prop-types */
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

function DashboardLayout({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="relative flex min-h-svh w-full">
      <DashboardHeader openMenu={openMenu} />
      <DashboardSidebar closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
      <section className="w-full h-full bg-zinc-100 py-28">
        <div className="container">
          <div className="laptop:max-w-6xl mx-auto">{children}</div>
        </div>
      </section>
    </main>
  );
}

export default DashboardLayout;
