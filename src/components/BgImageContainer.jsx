import { useGetLatestCourse } from "../features/course/useGetLatestCourse";
import { useLibraryBg } from "../features/library/useLibraryBg";

function BgImageContainer({ children, type, height }) {
  const { latestCourse } = useGetLatestCourse();
  const { libraryBg } = useLibraryBg();

  return (
    <div
      className={`${
        height ? height : "h-full"
      } bg-cover  bg-center bg-no-repeat ${
        type === "homepage-library" ? " pt-80" : ""
      } `}
      style={{
        backgroundImage: `${
          type === "homepage-course"
            ? `linear-gradient(0deg, rgba(21,21,21,1) 0%, rgba(0,0,0,0) 30%), url(${latestCourse.bgImage}`
            : `linear-gradient(0deg, rgba(21,21,21,1) 0%, rgba(0,0,0,0) 86%, rgba(21,21,21,1) 100%), url(${libraryBg}`
        })`,
      }}
    >
      {children}
    </div>
  );
}

export default BgImageContainer;
