import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Main.css";

function Main() {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <h1>메인 페이지</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
