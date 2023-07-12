import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AiOutlineGift } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownHandler = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header__container">
      <Link to="/">
        <div className="logo_wrapper">
          <img className="logo" src="./logo.png"></img>
          <span className="title">COZ Shopping</span>
        </div>
      </Link>
      <img
        className={`dropdown ${isDropdownOpen ? "open" : ""}`}
        onClick={dropdownHandler}
        src="./dropdown.svg"
      ></img>
      {isDropdownOpen && (
        <div className="open">
          <ul>
            <li className="triangle">
              <img src="./Polygon.svg"></img>
            </li>
            <div className="text__container">
              <div className="text__box">
                <li>정현진님, 안녕하세요!</li>
              </div>
              <div className="text__box">
                <Link to="/products/list">
                  <li>
                    <span className="icon__box">
                      <AiOutlineGift className="icon" />
                    </span>
                    상품리스트 페이지
                  </li>
                </Link>
              </div>
              <div className="text__box">
                <Link to="/bookmark">
                  <li>
                    <span className="icon__box">
                      <AiOutlineStar className="icon" />
                    </span>
                    북마크 페이지
                  </li>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
