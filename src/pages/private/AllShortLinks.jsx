import { MetaTags } from "../../components/shared";
import { DashboardShortLinks } from "../../components/pages/dashboard";

function AllShortLinks() {
  return (
    <>
      <MetaTags
        title="All Short Links • Short Freely"
        description=""
        conicalRoute="dashboard/links"
      />

      <DashboardShortLinks />
    </>
  );
}

export default AllShortLinks;
