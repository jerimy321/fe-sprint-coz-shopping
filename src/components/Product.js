import React from "react";
import { useState, useEffect } from "react";
import "./Product.css";
import Filter from "./Filter";
import { useRecoilState } from "recoil";
import { bookmarkState } from "../atoms";
import { PiStarFill } from "react-icons/pi";
import toast from "react-simple-toasts";

function Product({ count, showFilter }) {
  const [productList, setProductList] = useState([]);
  const [filteredType, setFilteredType] = useState(null);
  const [bookmarks, setBookmarks] = useRecoilState(bookmarkState);

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

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const onclickHandler = (type) => {
    setFilteredType(type);
  };

  const handleBookmark = (id) => {
    setBookmarks((prevBookmarks) => {
      const updatedBookmarks = { ...prevBookmarks };
      if (updatedBookmarks[id]) {
        delete updatedBookmarks[id];
      } else {
        updatedBookmarks[id] = true;
      }
      return updatedBookmarks;
    });
  };

  const filteredProductList = filteredType
    ? productList.filter((item) => item.type === filteredType)
    : productList;

  const bookmarkedProductList = filteredProductList.filter(
    (item) => bookmarks[item.id]
  );

  console.log(bookmarkedProductList);

  return (
    <div className="product__box">
      <Filter
        filteredType={filteredType}
        onTypeClick={onclickHandler}
        showFilter={showFilter}
      />
      {filteredProductList.map((item) => {
        const isBookmarked = item.id in bookmarks;

        return (
          <div key={item.id} className="product__container">
            <div className="product__img-container">
              <img
                src={item.image_url ? item.image_url : item.brand_image_url}
                className="product__img"
                // onClick={() => toast("상품이 북마크에 추가되었습니다.")} //상품이 북마크에서 제거되었습니다.
                alt={item.title ? item.title : item.brand_name}
              />
              <PiStarFill
                className={`bookmark__icon ${isBookmarked ? " on" : ""}`}
                onClick={() => {
                  handleBookmark(item.id);
                  {
                    if (!isBookmarked) {
                      toast(
                        <>
                          <PiStarFill className="bookmark__icon.on" /> 상품이
                          북마크에 추가되었습니다.
                        </>,
                        {
                          className: "toast",
                        }
                      );
                    } else {
                      toast(
                        <>
                          <PiStarFill className="bookmark__icon" /> 상품이
                          북마크에서 제거되었습니다.
                        </>,
                        {
                          className: "toast",
                        }
                      );
                    }
                  }
                }}
              />
            </div>
            {item.type === "Brand" && (
              <>
                <span className="product__first_line">
                  <span className="product__title">{item.brand_name}</span>
                  <span className="fw_700">관심고객수</span>
                </span>
                <span className="product__follower fw_600 ta_right">
                  {Number(item.follower).toLocaleString("ko-KR")}
                </span>
              </>
            )}
            {item.type === "Exhibition" && (
              <>
                <span className="product__title">{item.title}</span>
                <span className="product__sub fw_400">{item.sub_title}</span>
              </>
            )}
            {item.type === "Category" && (
              <>
                <span className="product__title">#{item.title}</span>
              </>
            )}
            {item.type === "Product" && (
              <>
                <span className="product__first_line">
                  <span className="product__title">{item.title}</span>
                  <span className="product__discount">
                    {item.discountPercentage}%
                  </span>
                </span>
                <span className="product__price fw_400 ta_right">
                  {Number(item.price).toLocaleString("ko-KR")}원
                </span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Product;
