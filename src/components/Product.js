import React from "react";
import { useState, useEffect } from "react";
import "./Product.css";
import Filter from "./Filter";

function Product({ count, showFilter }) {
  const [productList, setProductList] = useState([]);
  const [filteredType, setFilteredType] = useState(null);

  useEffect(() => {
    let url = "http://cozshopping.codestates-seb.link/api/v1/products";
    if (count) {
      url += `?count=${count}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        console.log(data);
      });
  }, [count]);

  const onclickHandler = (type) => {
    setFilteredType(type);
  };

  const filteredProductList = filteredType
    ? productList.filter((item) => item.type === filteredType)
    : productList;

  return (
    <div className="product__box">
      <Filter
        filteredType={filteredType}
        onTypeClick={onclickHandler}
        showFilter={showFilter}
      />
      {filteredProductList.map((item) => {
        if (item.type === "Brand") {
          return (
            <div key={item.id} className="product__container">
              <img
                src={item.brand_image_url}
                className="product__img"
                alt="product"
              />
              <span className="product__first_line">
                <span className="product__title">{item.brand_name}</span>
                <span className="fw_700">관심고객수</span>
              </span>
              <span className="product__follower fw_600 ta_right">
                {Number(item.follower).toLocaleString("ko-KR")}
              </span>
            </div>
          );
        } else if (item.type === "Exhibition") {
          return (
            <div key={item.id} className="product__container">
              <img
                src={item.image_url}
                className="product__img"
                alt="product"
              />
              <span className="product__title">{item.title}</span>
              <span className="product__sub fw_400 ta_right">
                {item.sub_title}
              </span>
            </div>
          );
        } else if (item.type === "Category") {
          return (
            <div key={item.id} className="product__container">
              <img
                src={item.image_url}
                className="product__img"
                alt="product"
              />
              <span className="product__title">#{item.title}</span>
            </div>
          );
        } else if (item.type === "Product") {
          return (
            <div key={item.id} className="product__container">
              <img
                src={item.image_url}
                className="product__img"
                alt="product"
              />
              <span className="product__first_line">
                <span className="product__title">{item.title}</span>
                <span className="product__discount">
                  {item.discountPercentage}%
                </span>
              </span>
              <span className="product__price fw_400 ta_right">
                {Number(item.price).toLocaleString("ko-KR")}원
              </span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Product;
