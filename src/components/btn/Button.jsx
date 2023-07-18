const Button = ({ children, clickHandler, ...restProps }) => {
  return (
    <button
      {...restProps}
      type="button"
      className=" text-md mt-3 cursor-pointer truncate rounded-xl border-2 border-primaryColor bg-btn_bg/50 px-5  py-1.5 text-white hover:bg-btn_bg/75  md:text-3xl "
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
