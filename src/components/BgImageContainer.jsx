import { useGetLatestCourse } from "../features/course/useGetLatestCourse";
import Spinner from "./Spinner";

function BgImageContainer({ children, type, height }) {
  const { isCourseLoading, latestCourse } = useGetLatestCourse();

  if (type === "mainpage-course" && isCourseLoading) return <Spinner />;

  return (
    <div
      className={`${
        height ? height : "h-full"
      } bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(${latestCourse.bgImage})`,
      }}
    >
      {children}
    </div>
  );
}

export default BgImageContainer;
