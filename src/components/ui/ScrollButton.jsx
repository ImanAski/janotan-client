import { useState } from "react";
import ScrollTopIcon from "../../../public/icons/scrollTopIcon.png";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <img
      className=" fixed  bottom-0 z-20 m-4 w-14 cursor-pointer transition-all  duration-500 md:w-20"
      src={ScrollTopIcon}
      onClick={scrollToTop}
      style={{
        opacity: visible ? "1" : "0",
        visibility: visible ? "visible" : "hidden",
      }}
    />
  );
};

export default ScrollButton;
