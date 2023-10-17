import { useNavigate } from "react-router-dom";
import IconButton from "./ui/IconButton";

import shoopingIcon from "../../public/icons/shopping.png";
import shoopingIconFilled from "../../public/icons/shopping-filled.png";
import profileIcon from "../../public/icons/profile.png";
import searchIcon from "../../public/icons/search.png";
import homeIcon from "../../public/icons/home-icon.png";
import MenuPage from "../../public/icons/menu.png";
import { useEffect, useState } from "react";

import { Turn as Hamburger } from "hamburger-react";

function Navigation() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <div
      className={` ${
        !show && " -translate-y-20"
      } fixed right-5 top-10 z-10 flex w-fit   items-center  gap-1 transition-all  duration-700  md:right-[126px]`}
    >
      <div className="  opacity-1  translate-x-0 transition-all duration-500 sm:translate-x-[700%]  md:hidden">
        <Hamburger
          toggle={setOpen}
          toggled={isOpen}
          color="#ffffff"
          size={30}
          rounded
          label="Show menu"
        />
      </div>
      <div
        className={` flex  flex-row-reverse  transition-all duration-300 ${
          isOpen
            ? " translate-x-0 "
            : " invisible translate-x-[25%] opacity-0  sm:visible sm:translate-x-0 sm:opacity-100 "
        }  `}
      >
        <IconButton>
          <img
            src={shoopingIcon}
            className={` w-6    duration-300`}
            alt="shoppingIcon"
          />

          <span className="absolute left-1 top-[5px] h-1 w-1 rounded-full bg-red-500"></span>
        </IconButton>

        <IconButton>
          <img className=" w-6" src={profileIcon} />
        </IconButton>

        <IconButton>
          <img
            onClick={() => navigate("/search")}
            className=" w-6"
            src={searchIcon}
          />
        </IconButton>

        <IconButton>
          <img className=" w-6" src={MenuPage} />
        </IconButton>

        <IconButton>
          <img
            onClick={() => navigate("/home")}
            className=" w-6"
            src={homeIcon}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default Navigation;
