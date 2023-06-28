const IconButton = (props) => {
  const { variant, children, ...restProps } = props;
  return (
    <button
      {...restProps}
      type="button"
      className={`px-2 py-2 rounded-xl bg-slate-50/20 text-gray-300 cursor-pointer hover:bg-slate-50/30`}
    >
      {children}
    </button>
  );
};

export default IconButton;
