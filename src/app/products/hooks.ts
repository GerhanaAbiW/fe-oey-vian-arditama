"use client";
import { ModelProduct } from "@/models/model-product/type";
import { useErrorStore } from "@/stores/useErrorStore/store";
import useSWR from "swr";
import GetProducts from "./service";

export const useProducts = () => {
  const { setError } = useErrorStore();
  const { data, error, isLoading } = useSWR<ModelProduct[]>(
    "list-product",
    GetProducts
  );
  if (error) {
    setError(error);
    // TODO: push route to page error
  }
  return { data, isLoading };
};
