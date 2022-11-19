import Header from "./components/Header";
import Categories from "./components/Categories";
import HomePage from "./components/HomePage";
import NewsPage from "./components/NewsPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Categories />
      <Routes>
        <Route exact path="/news" element={<NewsPage />}></Route>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
