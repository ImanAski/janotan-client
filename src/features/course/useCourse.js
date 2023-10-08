import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCourse } from "../../services/apiCourses";

export function useCourse() {
  const { courseId } = useParams();

  const {
    isLoading,
    data: course = {},
    error,
  } = useQuery({
    queryKey: ["course"],
    queryFn: () => getCourse(courseId),
    retry: false,
  });

  return { isLoading, error, course };
}
