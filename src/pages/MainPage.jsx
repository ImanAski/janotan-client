import StaffCarousel from "../components/StaffCarousel";
import Header from "../ui/Header";
import Academy from "../features/academy/Academy";
import Blog from "../features/blog/Blog";
import Library from "../features/library/Library";
import Footer from "../components/Footer";
import Therapist from "../components/Therapist";
import Container from "../components/Container";
import Course from "../features/course/Course";

function MainPage() {
  return (
    <>
      <Header />
      <Course />
      <Academy />
      {/* <Library /> */}
      {/* <Container /> */}
      <Blog />
      <Therapist />
      <Footer />
    </>
  );
}

export default MainPage;
