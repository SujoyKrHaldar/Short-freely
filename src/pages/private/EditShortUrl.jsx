import { DashboardEditUrl } from "../../components/pages/dashboard";
import { MetaTags } from "../../components/shared";

function EditShortUrl() {
  return (
    <>
      <MetaTags
        title="Edit url • Short Freely"
        description="Update an existing short url"
        conicalRoute="dashboard/edit/"
      />

      <DashboardEditUrl />
    </>
  );
}

export default EditShortUrl;
