import DashbaordEditLinkForm from "../shared/DashbaordLinkForm";
import DashboardBreadcrumb from "../shared/DashboardBreadcrumb";

function DashboardEditUrl() {
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
      name: "Edit",
      url: "/dashboard/edit",
    },
  ];

  return (
    <section className="w-full h-full space-y-8">
      <div className="space-y-2">
        <DashboardBreadcrumb links={breadcrumbs} />
        <h1 className="text-4xl font-bold">Edit Link</h1>
      </div>

      <DashbaordEditLinkForm />
    </section>
  );
}

export default DashboardEditUrl;
