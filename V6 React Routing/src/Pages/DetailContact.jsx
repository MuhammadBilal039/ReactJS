import { useParams } from "react-router-dom";

const DetailContact = () => {
  const params = useParams();
  console.log(params);
  return <div className="page">DetailContact : {params.id}</div>;
};

export default DetailContact;
