import { useSelector } from "react-redux";

const SectionC = () => {
  const counter = useSelector((store) => store.counter);
  return <div>SectionC {counter.count}</div>;
};

export default SectionC;
