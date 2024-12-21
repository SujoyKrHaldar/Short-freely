import DashbaordCreateLinkForm from "../shared/DashbaordLinkForm";
import DashboardBreadcrumb from "../shared/DashboardBreadcrumb";

function DashboardCreateShortUrl() {
  const breadcrumbs = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: "Links",
      url: "/dashboard/links",
    },
    {
      name: "Create",
      url: "/dashboard/create",
    },
  ];

  return (
    <section className="w-full h-full space-y-8">
      <div className="space-y-2">
        <DashboardBreadcrumb links={breadcrumbs} />
        <h1 className="dashboard-h1-bold">Create New Link</h1>
      </div>

      <DashbaordCreateLinkForm />
    </section>
  );
}

export default DashboardCreateShortUrl;
