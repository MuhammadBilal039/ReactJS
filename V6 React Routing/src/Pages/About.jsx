import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="page">About</div>
      <Outlet />
      <div className="w-30 h-30 bg-green-500"></div>
    </>
  );
};

export default About;
