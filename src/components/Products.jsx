import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h3>All Products {products.length}</h3>
      {products.map((product) => (
        <li key={product.productId}>
          <Link to={`/product/${product.productId}`}>
            {product.productTitle}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Products;
