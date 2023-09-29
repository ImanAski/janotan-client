function TextBtn({ children, onClick, size, withIcon, ...restProps }) {
  return (
    <button
      {...restProps}
      type="button"
      className={` ${size ? size : ""} 
  ${withIcon && "flex items-center gap-4 lg:gap-7 "}
   cursor-pointer truncate   py-1.5  text-white       `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TextBtn;
