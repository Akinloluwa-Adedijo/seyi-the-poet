"use client";

import useSWR from "swr";
import { client } from "@/sanity/client";

const fetcher = (query: string) => client.fetch(query);

export function useSanityData<T>(query: string) {
  const { data, error, isLoading } = useSWR<T>(query, fetcher);

  return {
    data,
    isLoading,
    error,
  };
}
