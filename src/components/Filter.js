import React from "react";
import Product from "./Product";
import "./Filter.css";

const Filter = ({ filteredType, onTypeClick, showFilter }) => {
  const handleTypeClick = (type) => {
    onTypeClick(type);
  };
  console.log(showFilter);
  if (showFilter === false) {
    return null;
  }

  return (
    <div className="filter__container">
      <div
        className={`filter__item ${filteredType === null ? "active" : ""}`}
        onClick={() => handleTypeClick(null)}
      >
        <img src="/images/filter_total.jpg"></img>
        <span>전체</span>
      </div>
      <div
        className={`filter__item ${filteredType === "Product" ? "active" : ""}`}
        onClick={() => handleTypeClick("Product")}
      >
        <img src="/images/filter_product.jpg"></img>
        <span>상품</span>
      </div>
      <div
        className={`filter__item ${
          filteredType === "Category" ? "active" : ""
        }`}
        onClick={() => handleTypeClick("Category")}
      >
        <img src="/images/filter_category.jpg"></img>
        <span>카테고리</span>
      </div>
      <div
        className={`filter__item ${
          filteredType === "Exhibition" ? "active" : ""
        }`}
        onClick={() => handleTypeClick("Exhibition")}
      >
        <img src="/images/filter_exhibition.jpg"></img>
        <span>기획전</span>
      </div>

      <div
        className={`filter__item ${filteredType === "Brand" ? "active" : ""}`}
        onClick={() => handleTypeClick("Brand")}
      >
        <img src="/images/filter_brand.jpg"></img>
        <span>브랜드</span>
      </div>
    </div>
  );
};

export default Filter;
