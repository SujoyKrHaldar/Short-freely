/* eslint-disable react/prop-types */
import DashboardLinkCard from "../shared/DashboardLinkCard";
import ErrorFallbackUi from "../shared/ErrorFallbackUi";
import { searchImgUrl } from "../../../../utils/imageUrls";
import NoResultFallbackUi from "../shared/NoResultFallbackUi";
import { Link } from "react-router-dom";

function DashboardHomeUrlLists({ data, loading, error }) {
  return (
    <>
      {loading ? (
        <SkeletonUi />
      ) : error ? (
        <ErrorFallbackUi
          title="Something went wrong."
          description="  The page you are trying to access, is not available right now or failed to fetch data for you. Try again later"
          imageUrl={searchImgUrl}
        />
      ) : data?.documents?.length > 0 ? (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Latest Links</h2>
            <div className="flex items-center gap-2">
              <Link
                className="bg-white text-black px-5 py-2 border border-zinc-400 inline-block"
                to="/dashboard/analytics"
              >
                View Analytics
              </Link>{" "}
              <Link
                className="bg-black text-white px-5 py-2 border border-zinc-400 inline-block"
                to="/dashboard/links"
              >
                View All Links
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            {data.documents.map((data) => (
              <DashboardLinkCard data={data} key={data.$id} />
            ))}
          </div>
        </section>
      ) : (
        <NoResultFallbackUi
          title="No links found"
          description="Want to see metrics on your recent links? Create and publish a short link to get started."
        />
      )}
    </>
  );
}

const SkeletonUi = () => {
  return (
    <section className="space-y-4">
      <section className="space-y-4">
        <div className=" bg-zinc-300 w-full h-[100px] animate-pulse"></div>
        <div className="bg-zinc-300 w-full h-[100px] animate-pulse"></div>
        <div className="bg-zinc-300 w-full h-[100px] animate-pulse"></div>
      </section>
    </section>
  );
};

export default DashboardHomeUrlLists;
