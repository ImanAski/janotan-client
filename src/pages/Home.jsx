import StaffCarousel from "../components/StaffCarousel";
import Header from "../components/Header";
import Academy from "../components/Academy";
import Blog from "../components/Blog";
import Library from "../components/Library";
import Footer from "../components/Footer";
import Therapist from "../components/Therapist";

function Home() {
  return (
    <>
      <Header />
      <StaffCarousel />
      <Academy />
      <Library />
      <Blog />
      <Therapist />
      <Footer />
    </>
  );
}

export default Home;
