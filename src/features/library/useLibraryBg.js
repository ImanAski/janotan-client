import { useQuery } from "@tanstack/react-query";
import { getLibraryBg } from "../../services/apiLibraryBg";

import libraryBg from "../../../public/images/library/fakeLibraryBg.jpg";

export function useLibraryBg() {
  // const {
  //   isLoading,
  //   data: libraryBg,
  //   error,
  // } = useQuery({
  //   queryKey: ["libraryBg"],
  //   queryFn: getLibraryBg,
  // });

  // return { isLoading, libraryBg, error };
  const isLoading = false;
  return { isLoading, libraryBg };
}
