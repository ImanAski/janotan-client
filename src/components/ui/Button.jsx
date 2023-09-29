const Button = ({ children, onClick, size, ...restProps }) => {
  return (
    <button
      {...restProps}
      type="button"
      className={` ${size ? size : ""} 
       my-3 w-64 cursor-pointer truncate  rounded-[10px] bg-white/10 py-1.5 text-3xl  text-white md:text-4xl      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
