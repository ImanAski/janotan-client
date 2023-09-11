import { useQuery } from "@tanstack/react-query";
import { getMainPageData } from "./apiMainPage";

export function useCabins() {
  const {
    isLoading,
    data: mainPageData,
    error,
  } = useQuery({
    queryKey: ["mainPageData"],
    queryFn: getMainPageData,
  });

  return { isLoading, mainPageData, error };
}
