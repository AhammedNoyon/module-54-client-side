import { Link, useLoaderData } from "react-router-dom";

const Product = () => {
  const product = useLoaderData();
  return (
    <div>
      <h3>{product.productTitle}</h3>
      <img
        style={{ width: "800px", height: "600px", objectFit: "cover" }}
        src={product.productImage}
        alt=""
      />

      <h3>
        <Link to="/user"> Go to user</Link>
      </h3>
    </div>
  );
};

export default Product;
