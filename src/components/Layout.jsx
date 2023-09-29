import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Spinner from "./Spinner";
import { useCourses } from "../features/course/useCourses";

function Layout() {
  const { isLoading: isCourseLoading } = useCourses();

  return (
    <div className="  relative bg-[#151515]">
      {isCourseLoading && <Spinner />}
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
