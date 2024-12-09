import { useLoaderData } from "react-router";
import { axiosInstance } from "../utils/axiosInstance";
export const loader = async ({ params }) => {
  const req = await axiosInstance.get("/products/" + params.id);
  const product = req.data;
  return { product };
};
function SingleProduct() {
  const { product } = useLoaderData();
  console.log(product);
  return (
    <div className="bg-base-100 shadow-xl text-center">
      <figure>
        <div className="ml-96">
          <img src={product.thumbnail} alt="Movie" />
        </div>
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title ml-96">{product.title}</h2>
        <p>Description: {product.description}</p>
        <span className="text-lg font-bold">Price: ${product.price}</span>
        <span className="text-lg font-bold">
          Discount: {product.discountPercentage}%
        </span>
        <span className="text-lg font-bold">Rating: {product.rating}</span>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
