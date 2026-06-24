import { useSelector } from "react-redux";

const SectionB = () => {
  const counter = useSelector((store) => store.counter);
  return <div>SectionB {counter.count}</div>;
};

export default SectionB;
