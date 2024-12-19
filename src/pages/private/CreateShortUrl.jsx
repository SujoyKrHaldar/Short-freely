import { DashboardCreateShortUrl } from "../../components/pages/dashboard";
import { MetaTags } from "../../components/shared";

function CreateShortUrl() {
  return (
    <>
      <MetaTags
        title="Create short url • Short Freely"
        description="Create a short url"
        conicalRoute="dashboard/create"
      />

      <DashboardCreateShortUrl />
    </>
  );
}

export default CreateShortUrl;
