/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { DashboardSingleUrlPage } from "../../components/pages/dashboard";
import { MetaTags } from "../../components/shared";
import { getUrlById } from "../../api/urlService";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks";

function UrlDetails() {
  const { error, data, loading } = useFetchUrlById();

  return (
    <>
      <MetaTags
        title={
          data?.title
            ? `${data?.title} • Url shortner`
            : "Url details • Url shortner"
        }
        description="Url details"
        conicalRoute={`dashboard/link/${data?.$id}`}
      />
      <DashboardSingleUrlPage data={data} loading={loading} error={error} />
    </>
  );
}

const useFetchUrlById = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { urlId } = useParams();
  const { userData } = useAuth();
  const userId = userData?.$id;

  const fetchUrlData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await getUrlById(urlId);
      if (userId !== response.userId) {
        return setError(true);
      }
      setData(response);
    } catch (_) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrlData();
  }, [urlId, userId]);

  return { loading, data, error };
};

export default UrlDetails;
