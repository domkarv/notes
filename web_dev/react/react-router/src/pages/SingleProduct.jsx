import { useParams } from "react-router-dom";
import products from "./data.js";

export default function SingleProduct() {
  // console.log(useParams());
  const { productId } = useParams();
  // console.log(productId);

  const product = products.find((product) => product.id === productId);
  /* above statement will return a product from array of products, that matches with 'productId' taken from 'useParams()' */
  // console.log(product);

  const { name, image } = product;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <img src={image} alt={name} className="w-1/2" />
    </div>
  );
}
