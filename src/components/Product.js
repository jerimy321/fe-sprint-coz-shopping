import React from "react";
import { useState, useEffect } from "react";

function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        console.log(data);
      });
  }, []);
  //data.type => Exhibition, Category, Brand, Product
  //Product => 상품 이름(title[2]), 00%(discountPercentage[6]), 상품 가격(price[5])
  //Brand => 브랜드이름(brand_name[4]), 관심고객수(follower[9]), 브랜드 이미지(brand_image_url[8])
  //Category => 카테고리이름(title)
  //Exhibition => 기획전 이름(title), 기획전 설명(sub_title[3])
  const shoppingList = () => {
    const renderedList = productList.map((item) => {
      if (item.type === "Brand") {
        return (
          <div key={item.id} className="product__container">
            <img
              src={item.brand_image_url}
              className="product__img"
              alt="product"
            />
            <h3 className="product__title">{item.brand_name}</h3>
            <h3 className="product__follower">{item.follower}</h3>
          </div>
        );
      } else if (item.type === "Exhibition") {
        return (
          <div key={item.id} className="product__container">
            <img src={item.image_url} className="product__img" alt="product" />
            <h3 className="product__title">{item.title}</h3>
            <h3 className="product__sub">{item.sub_title}</h3>
          </div>
        );
      } else if (item.type === "Category") {
        return (
          <div key={item.id} className="product__container">
            <img src={item.image_url} className="product__img" alt="product" />
            <h3 className="product__title">#{item.title}</h3>
          </div>
        );
      } else if (item.type === "Product") {
        return (
          <div key={item.id} className="product__container">
            <img src={item.image_url} className="product__img" alt="product" />
            <h3 className="product__title">{item.title}</h3>
            <h3 className="product__discount">{item.discountPercentage}</h3>
            <h3 className="product__price">{item.price}</h3>
          </div>
        );
      }
      return null;
    });
    return <div>{renderedList}</div>;
  };
  return <div>{shoppingList()}</div>;
}

export default Product;
