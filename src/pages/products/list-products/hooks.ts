import { ModelProduct } from "@/models/model-product/type";
import { useErrorStore } from "@/stores/useErrorStore/store";
import useSWR from "swr";
import GetListProduct from "./service";

export const useListProducts = () => {
  const { setError } = useErrorStore();
  const { data, error, isLoading } = useSWR<ModelProduct[]>(
    "list-product",
    GetListProduct
  );
  if (error) {
    setError(error);
    // TODO: push route to page error
  }
  return { data, isLoading };
};
