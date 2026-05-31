import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const CardContent = ({ name, profession }) => {
  return (
    <div className="pt-11 pb-4 flex justify-center items-center flex-col gap-5">
      <div className="text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <h3 className="text-xl">{profession}</h3>
      </div>
      <div className="flex justify-center gap-3">
        <div className="p-2 bg-[#4768AA] text-white rounded-full flex justify-between items-center">
          <FaFacebookF />
        </div>
        <div className="p-2 bg-[#35A3ED] text-white rounded-full flex justify-between items-center">
          <FaTwitter />
        </div>
        <div className="p-2 bg-[#DC2E70] text-white rounded-full flex justify-between items-center">
          <FaInstagram />
        </div>
        <div className="p-2 bg-[#F8001A] text-white rounded-full flex justify-between items-center">
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default CardContent;
