const Header = ({image, name}) => {
  return (
    <div className="h-[12rem] bg-[#4970F1] relative">
      {/* <div className="w-[9rem] h-[9rem] bg-red-400 absolute top-20  rounded-full border-3 border-[#4970F1]"> */}
        <img
          src={image}
          alt={name}
          className=" absolute left-[50%] -translate-x-1/2 translate-y-1/2 rounded-full border-3 border-[#4970F1] p-1 bg-white"
        />
      {/* </div> */}
    </div>
  );
};

export default Header;
