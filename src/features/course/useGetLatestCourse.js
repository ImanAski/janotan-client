import { useCourses } from "./useCourses";

export function useGetLatestCourse() {
  const { isLoading: isCourseLoading, fakeCoursesData } = useCourses();
  const latestCourse = fakeCoursesData.find((item) => item.latest === "true");
  return { isCourseLoading, latestCourse };
}
