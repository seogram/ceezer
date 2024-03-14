import { useQuery } from "react-query";
import { BASE_URL } from "../configs";
import type { Projects as ProjectsType } from '@/app/type';

const logSentry = (error:Error) => {
  //Log in Sentry or other log systems
  throw error;
};

interface UseProjectDataReturn {
  data: ProjectsType;
  isFetching: boolean;
  isError: boolean;
  error: unknown
}

const getData = async () => {

  const url = `${BASE_URL}/tech/frontend-code-challenge/projects_sample.json`;

  const response = fetch(url)
    .then(response => {
      if (!response.ok) {
        throw response;
      }
      return response.json()
    })
    .catch(error => logSentry(error))

  return response;
};

export function useData():UseProjectDataReturn {

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
    data: data,
    error,
  };
}