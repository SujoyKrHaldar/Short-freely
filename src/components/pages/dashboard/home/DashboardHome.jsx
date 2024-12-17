import { Link } from "react-router-dom";
import { greetingImgUrl as imageUrl } from "../../../../utils/imageUrls";
import { useAuth } from "../../../../hooks";
import DashboardHomeUrlLists from "./DashboardHomeUrlLists";
// import DashboardHomeStats from "./DashboardHomeStats";
import { useFetchUrls } from "../../../../hooks";

function DashboardHome() {
  const { userData } = useAuth();
  const DEFAULT_URL_LIMIT = 3;
  const { data, loading, error } = useFetchUrls({ limit: DEFAULT_URL_LIMIT });

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
          <img src={imageUrl} alt="page not found" />
        </div>
      </div>

      {/* <DashboardHomeStats data={data} /> */}
      <DashboardHomeUrlLists data={data} loading={loading} error={error} />
    </section>
  );
}

export default DashboardHome;
