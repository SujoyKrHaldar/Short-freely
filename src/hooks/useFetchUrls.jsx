/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getAllUrls } from "../api/urlService";
import useAuth from "./useAuth";

const useFetchUrls = ({ limit }) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { userData } = useAuth();
  const userId = userData?.$id;

  const fetchUrlData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await getAllUrls({ userId, limit });
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

export default useFetchUrls;
