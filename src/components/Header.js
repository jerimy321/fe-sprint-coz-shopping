import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownHandler = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header__container">
      <Link to="/">
        <div className="logo_wrapper">
          <img className="logo" src="/images/logo.png" alt="logo"></img>
          <span className="title">COZ Shopping</span>
        </div>
      </Link>
      <img
        className={`dropdown ${isDropdownOpen ? "open" : ""}`}
        onClick={dropdownHandler}
        src="/images/dropdown.svg"
      ></img>
      {isDropdownOpen && <Dropdown />}
    </div>
  );
}

export default Header;
