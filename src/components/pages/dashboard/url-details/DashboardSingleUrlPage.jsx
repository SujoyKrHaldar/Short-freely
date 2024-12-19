/* eslint-disable react/prop-types */
import { searchImgUrl } from "../../../../utils/imageUrls";
import ErrorFallbackUi from "../shared/ErrorFallbackUi";
import DashboardUrlDetails from "./DashboardUrlDetails";

function DashboardSingleUrlPage({ loading, data, error }) {
  return (
    <>
      {loading ? (
        <SkeletonUi />
      ) : error ? (
        <ErrorFallbackUi
          title="Content not Found"
          description="  The page you are trying to access, is not found at this moment."
          imageUrl={searchImgUrl}
        />
      ) : (
        <DashboardUrlDetails data={data} />
      )}
    </>
  );
}

const SkeletonUi = () => {
  return (
    <section className="w-full h-full space-y-8">
      <div className="flex items-end justify-between w-full h-full">
        <div className="bg-zinc-300 w-64 h-[40px] animate-pulse"></div>
        <div className=" bg-zinc-300 w-64 h-[40px] animate-pulse"></div>
      </div>

      <section className="space-y-4">
        <div className=" bg-zinc-300 w-full h-[200px] animate-pulse"></div>

        <div className="bg-zinc-300 w-full h-[300px] animate-pulse"></div>
      </section>
    </section>
  );
};

export default DashboardSingleUrlPage;
