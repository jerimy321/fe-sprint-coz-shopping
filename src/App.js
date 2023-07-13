import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductList from "./pages/ProductList";
import BookMark from "./pages/BookMark";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products/list" element={<ProductList />} />
            <Route path="/bookmark" element={<BookMark />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
