import { useLogout } from "../../../../hooks";
import DashboardBreadcrumb from "../shared/DashboardBreadcrumb";
import DashboardPasswordUpdate from "./DashboardPasswordUpdate";
import DashboardProfileEdit from "./DashboardProfileEdit";
import DashboardSessions from "./DashboardSessions";

function DashboardAccount() {
  const breadcrumbs = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: "Account",
      url: "/dashboard/account",
    },
  ];
  const { logout } = useLogout();

  return (
    <section className="w-full h-full space-y-8">
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <DashboardBreadcrumb links={breadcrumbs} />
          <h1 className="text-4xl font-bold">Your Account</h1>
          <p className="text-lg">Manage your account.</p>
        </div>

        <button
          onClick={logout}
          className="bg-red-700 border text-white border-red-700 px-6 py-2 cursor-pointer"
        >
          Logout Account
        </button>
      </div>

      <div className="space-y-8 pb-8">
        <DashboardProfileEdit />
        <DashboardPasswordUpdate />
        <DashboardSessions />
      </div>
    </section>
  );
}

export default DashboardAccount;
