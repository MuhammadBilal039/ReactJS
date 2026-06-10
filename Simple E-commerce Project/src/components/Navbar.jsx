import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-700 py-5 px-9 text-lg flex gap-6 items-center">
      <img
        className="w-16"
        src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"
        alt=""
      />
      <div className="flex gap-6 items-center text-xl">
        <Menu to={"/"} title={"Home"} />
        <Menu to={"/products"} title={"Products"} />
      </div>
    </div>
  );
};

const Menu = ({ to, title }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "text-[tomato]" : "")}
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default Navbar;
