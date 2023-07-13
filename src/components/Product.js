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
    return productList.map((item) => (
      <div key={item.id} className="list">
        <img src={item.image_url} alt="product" />
        <h3>{item.title}</h3>
        //classname이 product, brand.. 등등으로 구분 되게 하고 ? : 방법으로
        표시하기
      </div>
    ));
  };

  return;
}

export default Product;
