const IconButton = (props) => {
  const { variant, children, size, ...restProps } = props;
  return (
    <button
      {...restProps}
      type="button"
      className={`relative cursor-pointer rounded-xl bg-white/10 text-white hover:bg-slate-50/30 ${
        size === "lg" ? "px-4 py-4" : "px-2 py-2"
      }`}
    >
      {children}
    </button>
  );
};

export default IconButton;
