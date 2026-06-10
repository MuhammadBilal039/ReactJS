import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const fetchProduct = async () => {
    setIsLoading(true);
    const response = await axios(
      `https://fakestoreapi.com/products/${params.id}`,
    );
    setProduct(response.data);
    setIsLoading(false);
  };

  console.log(product);

  useEffect(() => {
    fetchProduct();
  }, []);

  if (isLoading) return <Loader />;
  return (
    <div className="w-[50%] bg-gray-500 m-auto rounded-lg p-5 flex gap-3">
      <div className="w-[35%]">
        <img className="w-full object-contain p-4" src={product.image} alt="" />
      </div>
      <div className="w-[65%]">
        <h1 className="text-3xl mb-3">{product?.title}</h1>
        <p className="text-gray-700 font-medium mb-3">
          Category:{" "}
          <span className="capitalize text-gray-300">{product?.category}</span>
        </p>
        <p className="mb-1 text-gray-700 font-medium ">Description:</p>
        <p className="mb-3 text-gray-300">{product?.description}</p>
        <div className="flex gap-4">
          <p className="text-xl flex items-center gap-2">
            Rating:{" "}
            <span className="bg-gray-700 w-fit px-5 py-1 rounded my-3 text-xs">
              {product?.rating?.rate}
            </span>
          </p>
          <p className="text-xl flex items-center gap-2">
            Count:{" "}
            <span className="bg-gray-700 w-fit px-5 py-1 rounded my-3 text-xs">
              {product?.rating?.count}
            </span>
          </p>
        </div>
        <button className="bg-gray-700 rounded px-6 py-2 mt-3 cursor-pointer transition-all duration-400 hover:bg-gray-700/50">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
