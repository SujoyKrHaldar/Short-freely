/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import DashboardEmptyBox from "./shared/DashboardEmptyBox";
import DashboardBreadcrumb from "./shared/DashboardBreadcrumb";
import { searchImgUrl as imgUrl } from "../../../utils/imageUrls";
import DashboardLinkCard from "./shared/DashboardLinkCard";

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
        <ErrorUi />
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
        <DashboardEmptyBox />
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

const ErrorUi = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <section className="container py-16 w-full h-full flex items-center justify-center">
      <div className="space-y-4 text-center max-w-2xl">
        <div className="w-[200px] h-[180px] mx-auto">
          <img src={imgUrl} alt="page not found" />
        </div>
        <h1 className="text-5xl font-bold">Something went wrong.</h1>
        <p className="text-lg">
          The page you are trying to access, is not available right now. Try
          again later.
        </p>

        <div className="flex items-center gap-2 justify-center">
          <Link
            className="bg-black text-white px-6 py-3 border border-black"
            to="/dashboard"
          >
            back to Home
          </Link>
          <p
            onClick={handleClick}
            className="bg-white border border-black px-6 py-3 cursor-pointer"
          >
            Go Back
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardShortLinks;
