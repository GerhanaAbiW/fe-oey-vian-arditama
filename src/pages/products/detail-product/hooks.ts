import { ModelProduct } from "@/models/model-product/type";
import { useErrorStore } from "@/stores/useErrorStore/store";
import useSWR from "swr";
import GetDetailProduct from "./service";

export const useDetailProduct = (id: string) => {
  const { setError } = useErrorStore();
  const { data, error, isLoading } = useSWR<ModelProduct>(
    `detail-product/${id}`,
    GetDetailProduct
  );

  if (error) {
    setError(error);
    // TODO: push route to page error
  }

  return { data, error, isLoading };
};
