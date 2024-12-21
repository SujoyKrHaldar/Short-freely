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
        <section className="space-y-4 pt-4">
          <div className="flex flex-col mobile:flex-row items-start mobile:items-center justify-between gap-4">
            <h2 className="dashboard-h2-bold">Latest Links</h2>
            <Link className="btn" to="/dashboard/links">
              View All Links
            </Link>
          </div>

          <div className="space-y-2">
            {data.documents
              // .filter((doc) => doc?.clickCount?.length > 0) // TODO: HOW TO RENDER MOST PERFORMED BASED ON CLICK COUNT LINKS HERE FROM ALL LINKS
              .map((data) => (
                <DashboardLinkCard data={data} key={data.$id} />
              ))}
          </div>
        </section>
      ) : (
        <NoResultFallbackUi
          title="You dont have any active Links"
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
        {[...Array(3)].map((data, id) => (
          <div
            key={id}
            className=" bg-zinc-300 w-full  h-[330px] tablet:h-[200px] laptop:h-[170px] animate-pulse"
          ></div>
        ))}
      </section>
    </section>
  );
};

export default DashboardHomeUrlLists;
