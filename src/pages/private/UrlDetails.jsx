import { DashboardSingleUrlPage } from "../../components/pages/dashboard";
import { MetaTags } from "../../components/shared";
import { useParams } from "react-router-dom";
import { useFetchUrlById } from "../../hooks";

function UrlDetails() {
  const { urlId } = useParams();
  const { error, data, loading } = useFetchUrlById(urlId);

  return (
    <>
      <MetaTags
        title={data?.title ? `${data?.title} • Short Freely` : "Loading..."}
        description="Url details"
        conicalRoute={`dashboard/link/${data?.$id}`}
      />
      <DashboardSingleUrlPage data={data} loading={loading} error={error} />
    </>
  );
}

export default UrlDetails;
