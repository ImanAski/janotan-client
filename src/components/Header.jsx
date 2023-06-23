import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div>
      <div className="p-30 bg-gradient-to-b from-transparent via-transparent to-black h-full h-screen w-full relative">
        <img
          src="/images/book-background.jfif"
          alt="#"
          height="1000px"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="p-24 flex-col flex items-center justify-center">
          <img
            src="https://source.unsplash.com/random/200x200/?logo"
            className="rounded-xl"
          />
          <div className="p-5 flex items-center justiry-center">
            s
            <FontAwesomeIcon icon="coffee" size="6x" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
