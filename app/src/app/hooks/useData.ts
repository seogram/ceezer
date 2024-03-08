import { useQuery } from "react-query";
import {BASE_URL} from "../configs";

const logSentry = () => {
  //Log in Sentry or other log systems
};
const request = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorCode = response.status;
      throw new Error(`An error occurred: ${errorCode}`);
    }
    return response.json();
  } catch (error) {
    logSentry();
    throw error;
  }
};
const getData = async () => {

  const url = `${BASE_URL}/tech/frontend-code-challenge/projects_sample.json`;

  const response = await request(url);
  return response;
};

export function useBicycleData() {

  const { isFetching, isError, data, error } = useQuery(
    "projects",
    () => getData(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return {
    isFetching,
    isError,
    data : data?.data,
    error,
  };
}