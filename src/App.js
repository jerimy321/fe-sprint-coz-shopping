import Header from "./components/Header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import BookMark from "./pages/BookMark";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content"></div>
        <Footer />
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/bookmark" element={<BookMark />} />
      </Routes>
    </Router>
  );
}

export default App;
