import { useDispatch } from "react-redux";
import { incrementAction } from "../Store/actions";

const About = () => {
  const dispatch = useDispatch();
  return <h1 onClick={() => dispatch(incrementAction())}>About</h1>;
};

export default About;
