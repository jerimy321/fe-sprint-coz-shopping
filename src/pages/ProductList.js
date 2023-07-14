import React from "react";
import Product from "../components/Product";

const ProductList = () => {
  return (
    <div className="product_main">
      <div className="productList__container">
        <Product showFilter={true} />
      </div>
    </div>
  );
};

export default ProductList;
