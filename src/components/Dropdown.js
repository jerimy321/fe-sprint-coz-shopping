import React, { useState } from "react";
// import "./Header.css";
import { Link } from "react-router-dom";
import { AiOutlineGift, AiOutlineStar } from "react-icons/ai";

function Dropdown() {
  return (
    <div className="open">
      <ul>
        <li className="triangle">
          <img src="/images/Polygon.svg" alt="triangle"></img>
        </li>
        <div className="text__container">
          <div className="text__box">
            <li>정현진님, 안녕하세요!</li>
          </div>
          <div className="text__box">
            <Link to="/products/list">
              <li>
                <AiOutlineGift className="icon" />
                상품리스트 페이지
              </li>
            </Link>
          </div>
          <div className="text__box">
            <Link to="/bookmark">
              <li>
                <AiOutlineStar className="icon" />
                북마크 페이지
              </li>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Dropdown;
