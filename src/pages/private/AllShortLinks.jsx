/* eslint-disable no-unused-vars */
import { MetaTags } from "../../components/shared";
import { DashboardShortLinks } from "../../components/pages/dashboard";
import { useEffect, useState } from "react";
import { getAllUrls } from "../../api/urlService";
import { useAuth } from "../../hooks";

function AllShortLinks() {
  const { data, loading, error } = useFetchUrls();

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

const useFetchUrls = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { userData } = useAuth();
  const userId = userData.$id;

  const fetchUrlData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await getAllUrls(userId);
      setData(response);
    } catch (_) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrlData();
  }, []);

  return { loading, data, error };
};

export default AllShortLinks;
