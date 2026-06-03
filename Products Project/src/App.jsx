import Product from "./components/Product";
import data from "./data.json";

function App() {
  console.log(data);
  return (
    <div className="w-full min-h-screen bg-gray-900 p-4">
      <h1 className="text-3xl text-white text-center font-bold">
        Products List
      </h1>
      <div className="flex flex-col gap-5">
        {data?.map((product, index) => {
          return (
            <Product key={`${product.title}-${index}`} product={product} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
