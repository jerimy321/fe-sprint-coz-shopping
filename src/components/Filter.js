import React from "react";
import Product from "./Product";
import "./Filter.css";

const Filter = ({ filteredType, onTypeClick, showFilter }) => {
  const handleTypeClick = (type) => {
    onTypeClick(type);
  };
  const filterItems = [
    { type: null, label: "전체", image: "/images/filter_Total.jpg" },
    { type: "Product", label: "상품", image: "/images/filter_Product.jpg" },
    {
      type: "Category",
      label: "카테고리",
      image: "/images/filter_Category.jpg",
    },
    {
      type: "Exhibition",
      label: "기획전",
      image: "/images/filter_Exhibition.jpg",
    },
    { type: "Brand", label: "브랜드", image: "/images/filter_Brand.jpg" },
  ];

  if (!showFilter) {
    return null;
  }

  return (
    <div className="filter__container">
      {filterItems.map((item) => {
        return (
          <div
            key={item.type}
            className="filter__item"
            onClick={() => handleTypeClick(item.type)}
          >
            <img className="filter__img" src={item.image} alt={item.label} />
            <span
              className={`filter__label${
                filteredType === item.type ? " active" : ""
              }`}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
