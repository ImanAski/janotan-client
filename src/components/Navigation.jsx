import { useNavigate } from "react-router-dom";
import IconButton from "./ui/IconButton";

function Navigation() {
  const navigate = useNavigate();

  return (
    <div className=" fixed right-5 top-10 z-10 flex w-fit   flex-row-reverse items-center gap-1  md:right-[126px]">
      <IconButton>
        <img className=" w-6" src="../../public/icons/shopping.png" />
        <span className="absolute left-1 top-[5px] h-1 w-1 rounded-full bg-red-500"></span>
      </IconButton>

      <IconButton>
        <img className=" w-6" src="../../public/icons/profile.png" />
      </IconButton>

      <IconButton>
        <img className=" w-6" src="../../public/icons/search.png" />
      </IconButton>

      <IconButton>
        <img className=" w-6" src="../../public/icons/menu.png" />
      </IconButton>

      <IconButton>
        <img
          onClick={() => navigate("/home")}
          className=" w-6"
          src="../../public/icons/home-icon.png"
        />
      </IconButton>
    </div>
  );
}

export default Navigation;
