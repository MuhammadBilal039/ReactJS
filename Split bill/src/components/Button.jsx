const Button = ({ text, clickHandler, width }) => {
  return (
    <button
      style={{ width: width }}
      onClick={clickHandler}
      className="py-2 px-4 bg-amber-400 text-white rounded cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;
