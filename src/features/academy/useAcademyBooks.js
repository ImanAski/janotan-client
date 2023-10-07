import { useQuery } from "@tanstack/react-query";
import { getAcademyBooks } from "../../services/apiAcademyBooks";
import { academyBooks as fakeAcademyBooks } from "../../data/academyBooks";

export function useAcademyBooks() {
  const {
    isLoading,
    data: academyBooks = [],
    error,
  } = useQuery({
    queryKey: ["academyBooks"],
    queryFn: getAcademyBooks,
  });

  return { isLoading, academyBooks, error };
  // const isLoading = false;
  // return { isLoading, fakeAcademyBooks };
}
