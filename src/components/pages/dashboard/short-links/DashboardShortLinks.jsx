/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import NoResultFallbackUi from "../shared/NoResultFallbackUi";
import DashboardBreadcrumb from "../shared/DashboardBreadcrumb";
import { completedImgUrl, searchImgUrl } from "../../../../utils/imageUrls";
import DashboardLinkCard from "../shared/DashboardLinkCard";
import ErrorFallbackUi from "../shared/ErrorFallbackUi";
import { useFetchUrls, useQueryParams } from "../../../../hooks";

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

  const page = parseInt(useQueryParams("page")) || 1;

  const ITEMS_PER_PAGE = 5;
  const { loading, data, error, totalPages, currentPage } = useFetchUrls({
    limit: ITEMS_PER_PAGE,
    page,
  });

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
          className="bg-white text-black px-5 py-2 border border-zinc-400 inline-block"
          to="/dashboard/create"
        >
          Create Short Link
        </Link>
      </div>

      <div className="space-y-4 pt-4 border-t border-zinc-300 relative">
        {data?.documents?.length > 0 && !error && (
          <p>Total {data?.total} links found.</p>
        )}

        {loading ? (
          <SkeletonUi />
        ) : error ? (
          <ErrorFallbackUi
            title="Something went wrong."
            description="  The page you are trying to access, is not available right now or failed to fetch data for you. Try again later"
            imageUrl={searchImgUrl}
          />
        ) : data?.documents?.length > 0 ? (
          <div className="space-y-2 min-h-[400px] h-full">
            {data?.documents?.map((data) => (
              <DashboardLinkCard data={data} key={data.$id} />
            ))}

            {page === totalPages && (
              <div className="text-center pt-8 opacity-50">
                <div className="w-[200px] mx-auto h-auto">
                  <img src={completedImgUrl} alt="end of the list" />
                </div>
                <p>You have reached end of your list</p>
              </div>
            )}
          </div>
        ) : (
          <NoResultFallbackUi
            title="No links created"
            description="Want to see metrics on your recent links? Create and publish a short link to get started."
          />
        )}

        {data?.documents?.length > 0 && !error && (
          <PaginationControl
            page={page}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        )}
      </div>
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

const PaginationControl = ({ page, totalPages, currentPage }) => {
  const navigate = useNavigate();
  const handlePageChange = (newPage) => {
    newPage === 1
      ? navigate(`/dashboard/links`)
      : navigate(`/dashboard/links?page=${newPage}`);
  };

  return (
    <div className="sticky bottom-0 flex items-center justify-between py-6 border-t border-t-zinc-300 bg-zinc-100">
      <p>
        Page {currentPage} of total {totalPages}
      </p>

      <div className="flex items-center gap-2">
        <button
          className={` ${
            currentPage <= 1 ? "bg-zinc-100 border-0 text-zinc-400" : "bg-white"
          } text-black px-5 py-2 border border-zinc-300  inline-block`}
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>

        <button
          className={` ${
            currentPage >= totalPages
              ? "bg-zinc-100 border-0 text-zinc-400"
              : "bg-white"
          } bg-white text-black px-5 py-2 border border-zinc-300 inline-block`}
          disabled={currentPage >= totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardShortLinks;
