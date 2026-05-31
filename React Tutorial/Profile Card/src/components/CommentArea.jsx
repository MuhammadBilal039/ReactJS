import { BiMessageRounded } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";

const CommentArea = ({ likes, comments, shares }) => {
  return (
    <div className=" py-7 flex justify-center items-center gap-3">
      <div className="flex items-center gap-1 text-xl border-r-2 border-gray-400 pr-3 ">
        <FaRegHeart />
        <p>{likes}</p>
      </div>
      <div className="flex items-center gap-1 text-xl border-r-2 border-gray-400 pr-3 ">
        <BiMessageRounded />
        <p>{comments}</p>
      </div>
      <div className="flex items-center gap-1 text-xl">
        <BiShare />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default CommentArea;
