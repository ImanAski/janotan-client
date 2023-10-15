import { useCourses } from "./useCourses";
import { courses as fakeCourses } from "../../data/courses";

export function useGetLatestCourse() {
  const { isLoading: isCourseLoading, courses } = useCourses();

  let latestCourse;
  if (courses) {
    latestCourse = courses.slice(-1)[0];
  } else {
    latestCourse = fakeCourses[0];
  }

  return { isCourseLoading, latestCourse };
}
