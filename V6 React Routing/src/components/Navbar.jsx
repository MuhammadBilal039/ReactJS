import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;

  const handleClick = () => {
    // navigate with logically
    if (isLoggedIn) navigate("/about");
  };

  return (
    <>
      <div className="p-5 bg-gray-600 flex gap-5 justify-center items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Contact
        </NavLink>
        <NavLink
          to={"/help"}
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Help
        </NavLink>
      </div>
      <button
        className="py-3 px-4 bg-gray-800 cursor-pointer "
        onClick={handleClick}
      >
        Navigate to About
      </button>
    </>
  );
};

export default Navbar;
