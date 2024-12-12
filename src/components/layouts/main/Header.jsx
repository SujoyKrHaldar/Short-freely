import Navbar from "./Navbar";

function Header() {
  return (
    <header className="z-40 fixed inset-0 w-full h-screen pointer-events-none flex flex-col justify-between">
      <Navbar />
    </header>
  );
}

export default Header;
