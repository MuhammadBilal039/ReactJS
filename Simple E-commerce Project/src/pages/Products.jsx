import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios("https://fakestoreapi.com/products");
    setProducts(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-5 gap-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="group p-5 bg-gray-700 rounded-lg cursor-pointer"
    >
      <img
        className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-300"
        src={product.image}
        alt=""
      />
      <h2 className="text-xl line-clamp-2 group-hover:text-blue-400">
        {product.title}
      </h2>
      <div className="flex gap-3 items-center">
        <p className="bg-green-600 w-fit px-5 py-1 rounded my-3">
          {product.rating.rate}
        </p>
        <p className="bg-green-600 w-fit px-5 py-1 rounded my-3">
          {product.rating.count}
        </p>
      </div>
      <p className="text-xl text-gray-400">Rs: {product.price}/-</p>
    </div>
  );
};

export default Products;
