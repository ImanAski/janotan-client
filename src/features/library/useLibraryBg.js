import { useQuery } from "@tanstack/react-query";
import { getLibraryBg } from "../../services/apiLibraryBg";

import fakeLibraryBg from "../../../public/images/library/fakeLibraryBg.jpg";

export function useLibraryBg() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["libraryBg"],
    queryFn: getLibraryBg,
  });

  let libraryBg;
  if (data) {
    libraryBg = data;
  } else {
    libraryBg = fakeLibraryBg;
  }

  return { isLoading, libraryBg, error };
  // const isLoading = false;
  // return { isLoading, libraryBg };
}
