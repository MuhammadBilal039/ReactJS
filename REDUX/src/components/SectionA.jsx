import { useSelector } from "react-redux";

const SectionA = () => {
  const counter = useSelector((store) => store.counter);
  return <div>SectionA {counter.count}</div>;
};

export default SectionA;
