import { Link } from "react-router-dom";
import DashboardEmptyBox from "./shared/DashboardEmptyBox";

function DashboardShortLinks() {
  return (
    <section className="w-full h-full space-y-8">
      <div className="flex items-end justify-between w-full h-full">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-zinc-500">
            <Link to="/dashboard">Dashboard</Link> /{" "}
            <Link to="/dashboard/links">Links</Link>
          </div>
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
