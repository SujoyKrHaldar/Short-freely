import { Link } from "react-router-dom";
import DashboardEmptyBox from "./shared/DashboardEmptyBox";
import DashboardBreadcrumb from "./shared/DashboardBreadcrumb";

function DashboardShortLinks() {
  const breadcrumbs = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: "Links",
      url: "/dashboard/links",
    },
  ];

  return (
    <section className="w-full h-full space-y-8">
      <div className="flex items-end justify-between w-full h-full">
        <div className="space-y-2">
          <DashboardBreadcrumb links={breadcrumbs} />
          <h1 className="text-4xl font-bold">All Short Links</h1>
          <p className="text-lg">
            Create and manage all short links from here.
          </p>
        </div>

        <Link
          className="bg-white text-black px-5 py-3 border border-zinc-300  inline-block"
          to="/dashboard/create"
        >
          Create Short Link
        </Link>
      </div>
      <DashboardEmptyBox />
    </section>
  );
}

export default DashboardShortLinks;
