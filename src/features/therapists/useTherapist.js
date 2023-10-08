import { useQuery } from "@tanstack/react-query";
import { getTherapist } from "../../services/apiTherapists";
import { useParams } from "react-router-dom";
// import { useTherapists } from "./useTherapists";

export function useTherapist() {
  const { therapistId } = useParams();

  const {
    isLoading,
    data: therapist = {},
    error,
  } = useQuery({
    queryKey: ["therapist"],
    queryFn: () => getTherapist(therapistId),
    retry: false,
  });

  console.log(therapist);

  return { isLoading, error, therapist };
}
