import BgImageContainer from "../components/BgImageContainer";
import Footer from "../components/Footer";
import AcademySection from "../features/academy/AcademySection";
import Courses from "../features/course/Courses";
import NewCourse from "../features/course/NewCourse";
import LibrarySection from "../features/library/LibrarySection";
import PodcastSection from "../features/podcast/PodcastSection";
import Therapists from "../features/therapists/Therapists";

function HomePage() {
  return (
    <div>
      <BgImageContainer type="homepage-course">
        <NewCourse />
        <Courses />
      </BgImageContainer>

      <BgImageContainer type="homepage-library">
        <LibrarySection />
        <AcademySection />
      </BgImageContainer>

      <PodcastSection />

      <Therapists />

      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
