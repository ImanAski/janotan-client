import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";
import { courses } from "../../data/courses";

export function useCourses() {
  // const {
  //   isLoading,
  //   data: courses,
  //   error,
  // } = useQuery({
  //   queryKey: ["courses"],
  //   queryFn: getCourses,
  // });

  // return { isLoading, courses, error };
  const isLoading = false;
  return { isLoading, courses };
}
