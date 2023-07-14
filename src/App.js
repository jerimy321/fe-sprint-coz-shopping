import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductList from "./pages/ProductList";
import BookMarkPage from "./pages/BookMarkPage";
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
            <Route path="/bookmark" element={<BookMarkPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
