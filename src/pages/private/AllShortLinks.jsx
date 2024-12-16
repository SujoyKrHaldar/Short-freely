/* eslint-disable no-unused-vars */
import { MetaTags } from "../../components/shared";
import { DashboardShortLinks } from "../../components/pages/dashboard";
import { useFetchUrls } from "../../hooks";

function AllShortLinks() {
  const { data, loading, error } = useFetchUrls({ limit: 4 });

  return (
    <>
      <MetaTags
        title="All Short Links • Url shortner"
        description=""
        conicalRoute="dashboard/links"
      />

      <DashboardShortLinks data={data} loading={loading} error={error} />
    </>
  );
}

export default AllShortLinks;
