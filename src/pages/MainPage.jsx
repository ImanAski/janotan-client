import BgImageContainer from "../components/BgImageContainer";
import Footer from "../components/Footer";
import Sections from "../features/Sections";
import Courses from "../features/course/Courses";
import NewCourse from "../features/course/NewCourse";
import NewMicroBook from "../features/microbook/NewMicroBook";
import Therapists from "../features/therapists/Therapists";

function MainPage() {
  return (
    <>
      <BgImageContainer type="mainpage-course">
        <NewCourse />
        <Courses />
      </BgImageContainer>

      <Sections type="academy" />

      <BgImageContainer type="mainpage-main">
        <NewMicroBook />
        <Sections type="library" />
      </BgImageContainer>

      {/* <Therapists /> */}

      <Footer />
    </>
  );
}

export default MainPage;
