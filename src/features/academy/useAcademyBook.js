import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAcademyBook } from "../../services/apiAcademyBooks";

export function useAcademyBook() {
  const { academyBookId } = useParams();

  const {
    isLoading,
    data: academyBook = {},
    error,
  } = useQuery({
    queryKey: ["academyBook"],
    queryFn: () => getAcademyBook(academyBookId),
    retry: false,
  });

  return { isLoading, error, academyBook };
}
