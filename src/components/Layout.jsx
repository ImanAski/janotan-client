import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Spinner from "./Spinner";
import { useCourses } from "../features/course/useCourses";
import { useAcademyBooks } from "../features/academy/useAcademyBooks";
import { useTherapists } from "../features/therapists/useTherapists";
import ScrollTopIcon from "../components/ui/ScrollButton";

function Layout() {
  const { isLoading: isCourseLoading } = useCourses();
  const { isLoading: isAcademyBooksLoading } = useAcademyBooks();
  const { isLoading: isTherapistsLoading } = useTherapists();

  return (
    <div className="  relative bg-[#151515]">
      {isCourseLoading && <Spinner />}
      {isAcademyBooksLoading && <Spinner />}
      {isTherapistsLoading && <Spinner />}
      <Navigation />
      <Outlet />
      <ScrollTopIcon />
    </div>
  );
}

export default Layout;
