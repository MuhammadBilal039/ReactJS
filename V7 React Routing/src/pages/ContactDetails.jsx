import { useParams } from "react-router-dom";

const ContactDetails = () => {
  const params = useParams();
  console.log(params);
  return <div>ContactDetails : {params.id}</div>;
};

export default ContactDetails;
