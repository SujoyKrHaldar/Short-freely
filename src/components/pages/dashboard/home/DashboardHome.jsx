import NoResultFallbackUi from "../shared/NoResultFallbackUi";
import { Link } from "react-router-dom";
import { greetingImgUrl as imageUrl } from "../../../../utils/imageUrls";
import { useAuth } from "../../../../hooks";

function DashboardHome() {
  const { userData } = useAuth();

  return (
    <section className="w-full h-full space-y-8 relative z-10">
      <div className="flex items-end justify-between w-full h-full relative p-10 pt-20 bg-white overflow-hidden border border-zinc-300 -z-10">
        <div className="space-y-2">
          <p className="uppercase tracking-[0.5rem] text-sm">Greetings </p>
          <h1 className="text-4xl font-bold">{userData?.name}</h1>
          <p className="text-lg">Its good to see you.</p>
        </div>

        <Link
          className="bg-white text-black px-5 py-3 border border-black  inline-block"
          to="/dashboard/account"
        >
          Manage Account
        </Link>

        <div className="absolute top-0 right-[15%] w-1/4 h-auto -z-10 opacity-40">
          <img src={imageUrl} alt="page not found" />
        </div>
      </div>

      <div className="z-50 relative">
        <NoResultFallbackUi
          title="No links found"
          description="Want to see metrics on your recent links? Create and publish a short link to get started."
        />
      </div>
    </section>
  );
}

export default DashboardHome;
