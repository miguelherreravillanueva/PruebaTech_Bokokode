import React from 'react'
import { useSelector } from "react-redux";

const Product = () => {
  const { products } = useSelector((state) => state.products);

  const product = products.map((product) => {
    return (
      <div className="product">
        <p>{product.name}</p>
      </div>
    );
  });
  return <div>{product}</div>;
};

export default Product;