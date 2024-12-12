import { Outlet } from "react-router-dom";
import Logo from "./assets/svgs/Logo";

function App() {
  return (
    <>
      {/* <section className="w-screen h-screen fixed inset-0 bg-white flex items-center justify-center z-50 overflow-hidden">
        <div className="w-[120px] animate-pulse">
          <Logo />
        </div>
      </section> */}
      <Outlet />
    </>
  );
}

export default App;
