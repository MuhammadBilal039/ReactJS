import { useNewsContext } from "../context/NewsContext";
import Wrapper from "./Wrapper";

const Category = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext();

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = async (e) => {
    const category = e.target.value;
    const data = await fetchNews(`/everything?q=${category}`);
    setNews(data.articles);
  };

  return (
    <div className={`${className}`}>
      <Wrapper>
        <div
          className={`max-w-full w-fit m-auto flex gap-5 overflow-x-auto px-4 scrollbar-none`}
        >
          {categories.map((category, index) => {
            return (
              <button
                value={category}
                onClick={handleClick}
                key={index}
                className="btn btn-primary"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
