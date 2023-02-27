import { Link } from "react-router-dom";
import products from "./data.js";

export default function Products() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id} className="mb-4">
            <Link
              to={`/products/${product.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold my-8 py-2 px-4 rounded"
            >
              {product.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
