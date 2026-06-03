const Product = ({ product }) => {
  const {
    title,
    reviews,
    price,
    originalPrice,
    discount,
    offers,
    details,
    image,
  } = product;
  return (
    <div className="w-full shadow-2xl p-5 bg-[#1E1E1E] rounded-2xl flex gap-4 justify-between items-center my-5 text-white">
      <div className="flex gap-4">
        <div className="w-[20rem] h-full flex justify-center items-center">
          <img className="w-[50%]   " src={image} alt="" />
        </div>
        <div className="">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="flex items-center gap-1 text-gray-400/80"><span className="text-yellow-500 text-xl">✫</span>{reviews}</p>
          <ul>
            {details?.map((productDetail) => {
              return <li className="list-disc list-inside">{productDetail}</li>;
            })}
          </ul>
          <p className="text-green-500">{offers?.exchangeOffer}</p>
          <p className="text-green-400/60">{offers?.bankOffer}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="text-2xl font-bold ">{price}</h2>
        <p className="line-through text-gray-400/80">{originalPrice}</p>
        <p className="text-[#236446]">{discount}</p>
      </div>
    </div>
  );
};

export default Product;
