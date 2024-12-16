/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import NoResultFallbackUi from "../shared/NoResultFallbackUi";
import DashboardBreadcrumb from "../shared/DashboardBreadcrumb";
import { searchImgUrl } from "../../../../utils/imageUrls";
import DashboardLinkCard from "../shared/DashboardLinkCard";
import ErrorFallbackUi from "../shared/ErrorFallbackUi";

function DashboardShortLinks({ loading, data, error }) {
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
    <section className="w-full h-full space-y-6">
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

      {loading ? (
        <SkeletonUi />
      ) : error ? (
        <ErrorFallbackUi
          title="Something went wrong."
          description="  The page you are trying to access, is not available right now or failed to fetch data for you. Try again later"
          imageUrl={searchImgUrl}
        />
      ) : data?.documents?.length > 0 ? (
        <div className="space-y-4 py-4 border-t border-zinc-300">
          <p>Total {data?.total} links found.</p>

          <div className="space-y-2">
            {data.documents.map((data) => (
              <DashboardLinkCard data={data} key={data.$id} />
            ))}
          </div>
        </div>
      ) : (
        <NoResultFallbackUi
          title="No links created"
          description="Want to see metrics on your recent links? Create and publish a short link to get started."
        />
      )}
    </section>
  );
}

const SkeletonUi = () => {
  return (
    <section className="w-full h-full space-y-8">
      <section className="space-y-4">
        <div className=" bg-zinc-300 w-full h-[100px] animate-pulse"></div>
        <div className="bg-zinc-300 w-full h-[100px] animate-pulse"></div>
        <div className="bg-zinc-300 w-full h-[100px] animate-pulse"></div>
        <div className="bg-zinc-300 w-full h-[100px] animate-pulse"></div>
      </section>
    </section>
  );
};

export default DashboardShortLinks;
