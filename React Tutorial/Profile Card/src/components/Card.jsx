import Header from "./Header";
import CardContent from "./CardContent";
import ButtonsArea from "./ButtonsArea";
import CommentArea from "./CommentArea";

const Card = ({ item }) => {
  const { name, profession, image, likes, comments, shares } = item;
  return (
    <div className=" rounded-2xl overflow-hidden shadow-2xl">
      <Header image={image} name={name} />
      <CardContent name={name} profession={profession} />
      <ButtonsArea />
      <CommentArea likes={likes} comments={comments} shares={shares} />
    </div>
  );
};

export default Card;
