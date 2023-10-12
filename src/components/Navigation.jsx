import { useNavigate } from "react-router-dom";
import IconButton from "./ui/IconButton";

import shoopingIcon from "../../public/icons/shopping.png";
import profileIcon from "../../public/icons/profile.png";
import searchIcon from "../../public/icons/search.png";
import homeIcon from "../../public/icons/home-icon.png";

function Navigation() {
  const navigate = useNavigate();

  return (
    <div className=" fixed right-5 top-10 z-10 flex w-fit   flex-row-reverse items-center gap-1  md:right-[126px]">
      <IconButton>
        <img className=" w-6" src={shoopingIcon} />
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
        <img className=" w-6" src="../../public/icons/menu.png" />
      </IconButton>

      <IconButton>
        <img
          onClick={() => navigate("/home")}
          className=" w-6"
          src={homeIcon}
        />
      </IconButton>
    </div>
  );
}

export default Navigation;
