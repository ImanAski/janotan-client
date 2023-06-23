const Button = ({ children, clickHandler }) => {
  return (
    <button
      type="button"
      className=" px-3.5 py-2 rounded-xl bg-slate-50/20 text-gray-300 cursor-pointer hover:bg-slate-50/30"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
