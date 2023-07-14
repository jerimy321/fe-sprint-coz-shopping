import React from "react";
import Product from "../components/Product";

const ProductList = () => {
  return (
    <div className="product_main">
      <h2 className="list__title">상품 리스트</h2>
      <div className="productList__container">
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
