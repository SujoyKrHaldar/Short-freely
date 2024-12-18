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
      <DashboardHeader
        handleExpand={handleDashboardExpand}
        isExpand={expandDashboardContent}
      />
      <DashboardSidebar />
      <section
        className={`z-20 flex flex-1 flex-col lg:min-w-0 h-full min-h-screen pointer-events-none duration-200 ease-in-out ${
          expandDashboardContent ? "lg:pl-10" : "lg:pl-80"
        }`}
      >
        <div className="rounded-tl-3xl pointer-events-auto h-full grow bg-zinc-100 border-l border-zinc-300 py-28 lg:px-16 pb-4">
          <div className="max-w-6xl mx-auto">{children}</div>
        </div>
      </section>
    </main>
  );
}

export default DashboardLayout;
