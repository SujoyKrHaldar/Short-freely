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

  return (
    <section className="w-full h-full space-y-8">
      <div className="space-y-2">
        <DashboardBreadcrumb links={breadcrumbs} />
        <h1 className="text-4xl font-bold">Your Account</h1>
        <p className="text-lg">Manage your account.</p>
      </div>

      <div className="space-y-8">
        <DashboardProfileEdit />
        <DashboardPasswordUpdate />
        <DashboardSessions />
      </div>
    </section>
  );
}

export default DashboardAccount;
