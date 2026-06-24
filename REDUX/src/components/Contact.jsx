import { useDispatch } from "react-redux";
import { decrementAction } from "../Store/actions";

const Contact = () => {
  const dispatch = useDispatch();
  return <h1 onClick={() => dispatch(decrementAction())}>Contact</h1>;
};

export default Contact;
