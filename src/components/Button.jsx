const Button = ({ children, clickHandler, ...restProps }) => {
  return (
    <button
      {...restProps}
      type="button"
      className=" text-md cursor-pointer truncate rounded-xl bg-slate-50/20 px-3.5 py-2 text-gray-200 hover:bg-slate-50/30  md:text-lg "
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
