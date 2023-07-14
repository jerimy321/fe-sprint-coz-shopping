import React from "react";
import "./MainPage.css";
import Product from "../components/Product";

function MainPage() {
  return (
    <div>
      <h2 className="list__title">상품 리스트</h2>
      <div className="productList__container">
        <Product />
      </div>
      <h2 className="list__title">북마크 리스트</h2>
    </div>
  );
}

export default MainPage;
