import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

// eslint-disable-next-line react/prop-types
function DashboardLayout({ children }) {
  return (
    <>
      <main className="relative flex min-h-svh w-full">
        <DashboardHeader />
        <DashboardSidebar />
        <section className="flex flex-1 flex-col lg:min-w-0 lg:pl-80 h-full min-h-screen">
          <div className="rounded-[40px] h-full grow p-6 lg:bg-zinc-100 border-l border-zinc-300 lg:p-28 lg:px-16 ">
            <div className="max-w-6xl mx-auto">{children}</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DashboardLayout;
