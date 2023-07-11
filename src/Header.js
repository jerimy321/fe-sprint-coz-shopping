import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownHandler = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header__container">
      //logo, title 클릭, 호버 효과 만들기
      <div className="logo_wrapper">
        <img className="logo" src="./logo.png"></img>
        <span className="title">COZ Shopping</span>
      </div>
      <img
        className={`dropdown ${isDropdownOpen ? "open" : ""}`}
        onClick={dropdownHandler}
        src="./dropdown.svg"
      ></img>
      {isDropdownOpen && ( //드롭다운 수정 필요
        <div className="open">
          <ul>
            <img src="./Polygon.svg"></img>
            <li>정현진님, 안녕하세요!</li>
            <li>
              <img src="./product.svg"></img>상품리스트 페이지
            </li>
            <li>
              <img src="./bookmark.svg"></img>북마크 페이지
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
