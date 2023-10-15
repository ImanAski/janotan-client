function TextBtn({ children, onClick, size, withIcon, ...restProps }) {
  return (
    <button
      {...restProps}
      type="button"
      className={` ${size ? size : ""} 
  ${withIcon && "  flex items-center gap-1   lg:gap-6 "}
   cursor-pointer truncate whitespace-normal break-normal break-words   py-1.5  text-white       `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TextBtn;
