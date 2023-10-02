import { useQuery } from "@tanstack/react-query";
import { getTherapists } from "../../services/apiTherapists";

import { therapists as fakeTherapists } from "../../data/therapists";

export function useTherapists() {
  // const {
  //   isLoading,
  //   data: therapists,
  //   error,
  // } = useQuery({
  //   queryKey: ["therapists"],
  //   queryFn: getAcademyBooks,
  // });

  // return { isLoading, therapists, error };
  const isLoading = false;
  return { isLoading, fakeTherapists };
}
