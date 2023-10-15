import { useNavigate } from "react-router-dom";
import IconButton from "./ui/IconButton";

import threadsIcon from "../../public/icons/threads.png";
import telegramIcon from "../../public/icons/telegram.png";
import instagramIcon from "../../public/icons/instagram.png";
import twitterIcon from "../../public/icons/twitter.png";

const Footer = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };

  return (
    <div className=" flex flex-col justify-start gap-2   pb-60  ">
      <div className=" flex flex-row-reverse flex-wrap items-center justify-center gap-3 ">
        <IconButton fill="true">
          <img
            onClick={onClickUrl(
              "https://www.threads.net/t/CuhAqm-L58t/?igshid=MzRlODBiNWFlZA==",
            )}
            className=" w-6 sm:w-8 md:w-10"
            src={threadsIcon}
          />
        </IconButton>

        <IconButton fill="true">
          <img
            onClick={onClickUrl(
              "https://t.me/janotancentre/16126?fbclid=PAAaY9EjNcAs4drJrHJswtZMzxyTmbe5sNXOcGJBMrNXlwoMH2VG_g5NVq7pc_aem_AS459JrttfKJB4h8k72Pe1opMdu11u0_fO_wdQomA_WU-d3tC3hvLtHfXAXRU6fbku4",
            )}
            className=" w-6 sm:w-8 md:w-10"
            src={telegramIcon}
          />
        </IconButton>

        <IconButton fill="true">
          <img
            onClick={onClickUrl(
              "https://instagram.com/janotancenter?igshid=MzRlODBiNWFlZA==",
            )}
            className="w-6 sm:w-8 md:w-10"
            src={instagramIcon}
          />
        </IconButton>

        <IconButton fill="true">
          <img
            onClick={onClickUrl("https://x.com/janotancenter?s=11")}
            className="w-6 sm:w-8 md:w-10"
            src={twitterIcon}
          />
        </IconButton>
      </div>

      <div className=" flex flex-col items-center gap-1  text-white">
        <p className="py-5 text-center text-lg  sm:text-2xl md:text-3xl ">
          اصفهان؛ خیابان‌ شیخ‌صدوق‌ شمالی؛ کوچه 56؛ ساختمان‌ سینا
        </p>
        <p
          className=" text-xs font-thin uppercase md:text-xl"
          style={{ letterSpacing: "5px" }}
        >
          janotanCenter.ir
        </p>
        <p
          className=" cursor-default text-xs  font-thin md:text-xl "
          style={{ wordSpacing: "2px", letterSpacing: "3px" }}
        >
          all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
