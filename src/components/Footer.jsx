import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "../components/Button";

import IconButton from "./IconButton";

const Footer = () => {
  return (
    <div
      className="p-30 bg-center bg-gradient-to-b from-black via-transparent to-black bg-cover bg-no-repeat  w-full relative h-auto
    mix-blend-overlay "
    >
      <img
        src="/images/footer-bg.jpg"
        alt="#"
        height="1000px"
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      <div className="py-24 flex-col flex items-center h-full  ">
        <div className="p-5 z-10 gap-1 flex items-center mb-5 justify-center">
          {/* TODO: Adding related Icons for header Icon buttons */}
          <IconButton px="5" py="5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </IconButton>

          <IconButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
          </IconButton>

          <IconButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </IconButton>
        </div>
        <div className="p-5 z-10 gap-1 flex flex-col items-center text-white">
        <img
            src="/images/logo.JPG"
            height="40px"
            width="40px"
            className="rounded-xl"
          />
            <p className="text-xs uppercase">janotan</p>
            <p className="py-2">اصفهان، خیابان شیخ صدوق، جنب سوپرمارکت</p>
            <p className="text-xs">تمامی حقوق برای موسسه جان و تن محفوظ است</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;