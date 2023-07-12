import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import BookMark from "./pages/BookMark";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/bookmark" element={<BookMark />} />
      </Routes>
    </Router>
  );
}

export default App;
