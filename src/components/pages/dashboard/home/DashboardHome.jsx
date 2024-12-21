/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { greetingImgUrl as imageUrl } from "../../../../utils/imageUrls";
import { useAuth } from "../../../../hooks";
import DashboardHomeUrlLists from "./DashboardHomeUrlLists";
import { useFetchUrls } from "../../../../hooks";
import { useEffect, useState } from "react";
import { getAllClickCounts } from "../../../../api/analyticService";
import { Unlink, QrCode, MousePointerClick as Click } from "lucide-react";

function DashboardHome() {
  const { userData } = useAuth();
  const userId = userData?.$id;
  const DEFAULT_URL_LIMIT = 5;

  const {
    data,
    loading: dataLoading,
    error,
  } = useFetchUrls({ limit: DEFAULT_URL_LIMIT });

  const { clickCount, loading: clickCountLoading } =
    useFetchAllClickCounts(userId);

  return (
    <section className="w-full h-full space-y-2 relative z-10 pb-8">
      <div className=" flex flex-col tablet:flex-row items-start gap-4 mobile:gap-8 tablet:items-end justify-between w-full h-full relative mobile:p-10 mobile:pt-20 mobile:bg-white overflow-hidden mobile:border border-zinc-300 -z-10">
        <div className="space-y-2">
          <p className="uppercase tracking-[0.5rem] text-sm">Greetings </p>
          <h1 className="dashboard-h1-bold">{userData?.name}</h1>
          <p className="text-lg">Its good to see you.</p>
        </div>

        <Link className="btn" to="/dashboard/account">
          Manage Account
        </Link>

        <div className=" hidden mobile:block absolute top-0 right-[15%] w-1/4 h-auto -z-10 opacity-40">
          <img src={imageUrl} alt="greetings" draggable={false} />
        </div>
      </div>

      <section className="grid gap-2 grid-cols-3 pb-8 border-b border-zinc-300">
        <div className="px-0  small-mobile:px-6 desktop:px-10 py-6 h-auto laptop:h-[125px] bg-white border border-zinc-300 laptop:flex items-start gap-4 relative overflow-hidden">
          {dataLoading ? (
            <div
              className={`absolute w-full h-full bg-black inset-0 ${
                dataLoading
                  ? " bg-zinc-300 animate-pulse"
                  : "bg-transparent pointer-events-none"
              }`}
            ></div>
          ) : (
            <>
              <div className="hidden tablet:block laptop:p-4 mb-4 laptop:mb-0 laptop:bg-zinc-200 rounded-full w-fit">
                <Unlink />
              </div>
              <div className="space-y-1 text-center mobile:text-left">
                <p className="text-3xl mobile:text-5xl font-bold">
                  {dataLoading ? 0 : error ? 0 : data?.total}
                </p>
                <p>Links created</p>
              </div>
            </>
          )}
        </div>

        <div className=" px-0  small-mobile:px-6  desktop:px-10 py-6 h-auto laptop:h-[125px] bg-white border border-zinc-300 laptop:flex items-start gap-4 relative overflow-hidden">
          {dataLoading ? (
            <div
              className={`absolute w-full h-full bg-black inset-0 ${
                dataLoading
                  ? " bg-zinc-300 animate-pulse"
                  : "bg-transparent pointer-events-none"
              }`}
            ></div>
          ) : (
            <>
              <div className="hidden tablet:block laptop:p-4 mb-4 laptop:mb-0 laptop:bg-zinc-200 rounded-full w-fit">
                <QrCode />
              </div>
              <div className="space-y-1 text-center mobile:text-left">
                <p className="text-3xl mobile:text-5xl font-bold">
                  {dataLoading ? 0 : error ? 0 : data?.total}
                </p>
                <p>QR generated</p>
              </div>
            </>
          )}
        </div>

        <div className=" px-0  small-mobile:px-6 desktop:px-10 py-6 h-auto laptop:h-[125px] bg-white border border-zinc-300 laptop:flex items-start gap-4 relative overflow-hidden">
          {dataLoading ? (
            <div
              className={`absolute w-full h-full bg-black inset-0 ${
                dataLoading
                  ? " bg-zinc-300 animate-pulse"
                  : "bg-transparent pointer-events-none"
              }`}
            ></div>
          ) : (
            <>
              {" "}
              <div className="hidden tablet:block laptop:p-4 mb-4 laptop:mb-0 laptop:bg-zinc-200 rounded-full w-fit">
                <Click />
              </div>
              <div className="space-y-1 text-center mobile:text-left">
                <p className="text-3xl mobile:text-5xl font-bold">
                  {clickCountLoading ? 0 : error ? 0 : clickCount}
                </p>
                <p>Clicks counted</p>
              </div>
            </>
          )}
        </div>
      </section>

      <DashboardHomeUrlLists data={data} loading={dataLoading} error={error} />
    </section>
  );
}

const useFetchAllClickCounts = (userId) => {
  const [clickCount, setClickCount] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchClickCounts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await getAllClickCounts(userId);

      setClickCount(response);
    } catch (_) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClickCounts();
  }, []);

  return { loading, clickCount, error };
};

export default DashboardHome;
