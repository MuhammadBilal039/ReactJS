const Button = ({ color, children, setSelectedColor }) => {
  const handleClick = () => {
    setSelectedColor(color);
  };

  return (
    <button
      style={{
        backgroundColor: color,
      }}
      className="py-3 px-6 text-white rounded-xl text-xl cursor-pointer"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
