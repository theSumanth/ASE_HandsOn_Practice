import { useState, useEffect } from "react";

import axiosApiClient from "../util/api";

export default function useFetchPlans(planType) {
  const [fetchedPlans, setFetchedPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(planType);
  useEffect(() => {
    async function fetchPrepaidPlans() {
      setIsLoading(true);
      try {
        const response = await axiosApiClient.get(`/plans/${planType}`);
        const { plans } = response.data;
        setFetchedPlans(plans);
        console.log(plans);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
        console.log(err);
      }
    }

    fetchPrepaidPlans();
  }, [planType]);

  return {
    fetchedPlans,
    isLoading,
    isError,
    setFetchedPlans,
  };
}
