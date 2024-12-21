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

  const ITEMS_PER_PAGE = 6;

  const { loading, data, error, totalPages, currentPage } = useFetchUrls({
    limit: ITEMS_PER_PAGE,
    page,
  });

  return (
    <section className="w-full h-full space-y-6">
      <div className="flex flex-col mobile:flex-row gap-8 mobile:items-end justify-between w-full h-full">
        <div className="space-y-4 mobile:space-y-2">
          <DashboardBreadcrumb links={breadcrumbs} />
          <h1 className="dashboard-h1-bold">All Short Links</h1>
          <p className="text-lg">
            Create and manage all short links from here.
          </p>
        </div>

        <Link className="btn" to="/dashboard/create">
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
              <div className="text-center py-8 opacity-50">
                <div className="w-[200px] mx-auto h-auto">
                  <img
                    src={completedImgUrl}
                    draggable={false}
                    alt="end of the list"
                  />
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
        <div className=" bg-zinc-300 w-full   h-[330px] tablet:h-[200px] laptop:h-[170px] animate-pulse"></div>
        <div className="bg-zinc-300 w-full  h-[330px] tablet:h-[200px] laptop:h-[170px] animate-pulse"></div>
        <div className="bg-zinc-300 w-full  h-[330px] tablet:h-[200px] laptop:h-[170px] animate-pulse"></div>
        <div className="bg-zinc-300 w-full  h-[330px] tablet:h-[200px] laptop:h-[170px] animate-pulse"></div>
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

  const getPaginationLinks = () => {
    const pages = [];

    if (totalPages <= 5) {
      // If total pages are small, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include the first page
      pages.push(1);

      // Include the current page and the one before it (if not at the start)
      if (currentPage > 2) {
        pages.push(currentPage - 1);
      }

      // Include the current page
      if (currentPage !== 1 && currentPage !== totalPages) {
        pages.push(currentPage);
      }

      // Include the next page if not near the end
      if (currentPage < totalPages - 1) {
        pages.push(currentPage + 1);
      }

      // Always include the last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return [...new Set(pages)]; // Remove duplicates if any
  };

  return (
    <div className=" relative tablet:sticky bottom-0 flex flex-col tablet:flex-row gap-4 items-center tablet:justify-between py-6 border-t border-t-zinc-300 bg-zinc-100">
      <p>
        Page {currentPage} of total {totalPages}
      </p>

      <div className="flex flex-col tablet:flex-row items-center gap-2 w-full tablet:w-fit ">
        <button
          className={` border w-full ${
            currentPage <= 1
              ? "bg-zinc-100 border-transparent text-zinc-400"
              : "bg-white hover:border-black"
          } text-black px-6 laptop:px-5 py-3 laptop:py-2 border-zinc-300 duration-150 `}
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>

        {getPaginationLinks().map((page, index, array) => (
          <>
            {index > 0 && page !== array[index - 1] + 1 && (
              <span className="hidden tablet:block">...</span>
            )}
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={` px-5 py-3 laptop:py-2 border bg-white duration-150 hover:border-black hidden tablet:block ${
                page === currentPage ? "border-black" : "border-zinc-300"
              }`}
            >
              {page}
            </button>
          </>
        ))}

        <button
          className={` border w-full ${
            currentPage >= totalPages
              ? "bg-zinc-100 border-transparent text-zinc-400"
              : "bg-white hover:border-black"
          } bg-white text-black px-6 laptop:px-5 py-3 laptop:py-2 border-zinc-300 duration-150 `}
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
