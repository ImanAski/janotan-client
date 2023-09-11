const IconButton = (props) => {
  const { children, ...restProps } = props;
  return (
    <button
      {...restProps}
      type="button"
      className={`relative cursor-pointer rounded-full px-2 py-2 text-white hover:bg-slate-50/30`}
    >
      {children}
    </button>
  );
};

export default IconButton;
