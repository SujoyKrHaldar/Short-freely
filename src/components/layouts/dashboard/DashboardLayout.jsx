/* eslint-disable react/prop-types */
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

function DashboardLayout({ children }) {
  const [expandDashboardContent, setExpandDashbaordContent] = useState(false);

  const handleDashboardExpand = () => {
    setExpandDashbaordContent(!expandDashboardContent);
  };
  return (
    <main className="relative flex min-h-svh w-full">
      <DashboardHeader handleExpand={handleDashboardExpand} />
      <DashboardSidebar />
      <section
        className={`z-20 flex flex-1 flex-col lg:min-w-0 h-full min-h-screen pointer-events-none duration-200 ease-in-out ${
          expandDashboardContent ? "lg:pl-10" : "lg:pl-80"
        }`}
      >
        <div className="pointer-events-auto h-full grow p-6 bg-zinc-100 border-l border-zinc-300 lg:p-28 lg:pb-16 lg:px-16 ">
          <div className="max-w-6xl mx-auto">{children}</div>
        </div>
      </section>
    </main>
  );
}

export default DashboardLayout;
