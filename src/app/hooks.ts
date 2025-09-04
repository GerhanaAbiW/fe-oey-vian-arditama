"use client";
import useSWR from "swr";
import GetDashboardInformation from "./service";

export const useDashboard = () => {
  const { data, error, isLoading } = useSWR(
    "dashboard",
    GetDashboardInformation
  );
  return { data, error, isLoading };
};
