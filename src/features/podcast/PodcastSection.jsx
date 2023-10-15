import podcastBg from "../../../public/images/podcast/podcastBg.jpg";
import enterPodcast from "../../../public/images/podcast/enterPodcast.png";
import { useNavigate } from "react-router-dom";

function PodcastSection() {
  const navigate = useNavigate();

  return (
    <div className=" relative flex flex-col items-center justify-center">
      <img src={podcastBg} />
      <img
        onClick={() => navigate("/podcast")}
        className="  absolute bottom-8 w-5/6 cursor-pointer lg:bottom-32  lg:w-2/3"
        src={enterPodcast}
      />
    </div>
  );
}

export default PodcastSection;
