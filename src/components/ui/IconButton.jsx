const IconButton = (props) => {
  const { children, fill, ...restProps } = props;
  return (
    <button
      {...restProps}
      type="button"
      className={` ${
        fill ? " rounded-2xl bg-white/10 p-6" : "rounded-full px-2 py-2"
      }  relative cursor-pointer  text-white hover:bg-slate-50/30`}
    >
      {children}
    </button>
  );
};

export default IconButton;
