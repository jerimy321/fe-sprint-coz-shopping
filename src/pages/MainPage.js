import React from "react";
import "./MainPage.css";
import Product from "../components/Product";
import { useRecoilValue } from "recoil";
import { bookmarkState } from "../atoms";

function MainPage() {
  const bookmarks = useRecoilValue(bookmarkState);
  const bookmarkedProducts = Object.values(bookmarks);

  return (
    <div className="product_main">
      <h2 className="list__title">상품 리스트</h2>
      <>
        <Product count={4} showFilter={false} />
      </>
      <h2 className="list__title">북마크 리스트</h2>
      <>
        {bookmarkedProducts.map((product) => (
          <Product key={product.id} product={product} showFilter={false} />
        ))}
      </>
    </div>
  );
}

export default MainPage;
