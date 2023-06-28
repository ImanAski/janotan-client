const Button = ({ children, clickHandler, ...restProps }) => {
  return (
    <button
      {...restProps}
      type="button"
      className=" px-3.5 py-2 rounded-xl bg-slate-50/20 text-gray-200 cursor-pointer hover:bg-slate-50/30 text-md truncate  md:text-lg "
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
