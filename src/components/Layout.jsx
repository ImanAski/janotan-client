import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Spinner from "./Spinner";
import { useCourses } from "../features/course/useCourses";
import { useAcademyBooks } from "../features/academy/useAcademyBooks";
import { useTherapists } from "../features/therapists/useTherapists";
import ScrollTopIcon from "../components/ui/ScrollButton";
import { useLibraryBg } from "../features/library/useLibraryBg";
import { useTherapist } from "../features/therapists/useTherapist";
import { useAcademyBook } from "../features/academy/useAcademyBook";

function Layout() {
  const { isLoading: isCourseLoading } = useCourses();
  const { isLoading: isAcademyBooksLoading } = useAcademyBooks();
  const { isLoading: isAcademyBookLoading } = useAcademyBook();
  const { isLoading: isTherapistsLoading } = useTherapists();
  const { isLoading: isTherapistLoading } = useTherapist();
  const { isLoading: isLibraryBgLoading } = useLibraryBg();

  return (
    <div className="  relative bg-[#151515]">
      {isCourseLoading && <Spinner />}
      {isAcademyBooksLoading && <Spinner />}
      {isAcademyBookLoading && <Spinner />}
      {isTherapistsLoading && <Spinner />}
      {isTherapistLoading && <Spinner />}
      {isLibraryBgLoading && <Spinner />}
      <Navigation />
      <Outlet />
      <ScrollTopIcon />
    </div>
  );
}

export default Layout;
