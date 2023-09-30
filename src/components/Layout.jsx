import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Spinner from "./Spinner";
import { useCourses } from "../features/course/useCourses";
import { useAcademyBooks } from "../features/academy/useAcademyBooks";

function Layout() {
  const { isLoading: isCourseLoading } = useCourses();
  const { isLoading: isAcademyBooksLoading } = useAcademyBooks();

  return (
    <div className="  relative bg-[#151515]">
      {isCourseLoading && <Spinner />}
      {isAcademyBooksLoading && <Spinner />}
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
