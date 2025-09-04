import { useErrorStore } from "@/stores/useErrorStore/store";
import useSWR from "swr";
import GetAboutUsInformation from "./service";

export const useAboutUs = () => {
  const { setError } = useErrorStore();
  const { data, error, isLoading } = useSWR("about-us", GetAboutUsInformation);
  if (error) {
    setError(error);
    // TODO: push route to page error
  }
  return { data, error, isLoading };
};
