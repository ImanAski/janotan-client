import { useCourse } from "../features/course/useCourse";

function CoursePage() {
  const { error, course } = useCourse();
  if (error) console.log(error);

  return (
    <div className=" bg-red-300 text-black">
      {course.name}
      <br /> {course.id}{" "}
    </div>
  );
}

export default CoursePage;
