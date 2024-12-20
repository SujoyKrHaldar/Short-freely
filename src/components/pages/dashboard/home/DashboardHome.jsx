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
  const DEFAULT_URL_LIMIT = 5;
  const {
    data,
    loading: dataLoading,
    error,
  } = useFetchUrls({ limit: DEFAULT_URL_LIMIT });
  const { clickCount, loading: clickCountLoading } = useFetchAllClickCounts();

  return (
    <section className="w-full h-full space-y-8 relative z-10 pb-8">
      <div className="flex items-end justify-between w-full h-full relative p-10 pt-20 bg-white overflow-hidden border border-zinc-300 -z-10">
        <div className="space-y-2">
          <p className="uppercase tracking-[0.5rem] text-sm">Greetings </p>
          <h1 className="text-4xl font-bold">{userData?.name}</h1>
          <p className="text-lg">Its good to see you.</p>
        </div>

        <Link
          className="bg-white text-black px-5 py-2 border border-zinc-400  inline-block"
          to="/dashboard/account"
        >
          Manage Account
        </Link>

        <div className="absolute top-0 right-[15%] w-1/4 h-auto -z-10 opacity-40">
          <img src={imageUrl} alt="greetings" draggable={false} />
        </div>
      </div>

      <section className="grid grid-cols-1 gap-6 desktop:grid-cols-3 mobile:grid-cols-2">
        <div className="px-10 py-6 h-[125px] bg-white border border-zinc-300 flex items-start gap-4 relative overflow-hidden">
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
              <div className="p-4 bg-zinc-200 rounded-full">
                <Unlink />
              </div>
              <div className="space-y-1">
                <p className="text-5xl font-bold">
                  {dataLoading ? 0 : data?.total}
                </p>
                <p>Links created</p>
              </div>
            </>
          )}
        </div>

        <div className="px-10 py-6 h-[125px] bg-white border border-zinc-300 flex items-start gap-4 relative overflow-hidden">
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
              <div className="p-4 bg-zinc-200 rounded-full">
                <QrCode />
              </div>
              <div className="space-y-1">
                <p className="text-5xl font-bold">
                  {dataLoading ? 0 : data?.total}
                </p>
                <p>QR generated</p>
              </div>
            </>
          )}
        </div>

        <div className="px-10 py-6 h-[125px] bg-white border border-zinc-300 flex items-start gap-4 relative overflow-hidden">
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
              <div className="p-4 bg-zinc-200 rounded-full">
                <Click />
              </div>
              <div className="space-y-1">
                <p className="text-5xl font-bold">
                  {clickCountLoading ? 0 : clickCount}
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

const useFetchAllClickCounts = (urlId) => {
  const [clickCount, setClickCount] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchClickCounts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await getAllClickCounts();

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
