import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Categories from "./components/Categories";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import SinglePage from "./components/SinglePage";
import Footer from "./components/Footer";
import React from "react";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <Header />
      <Categories />
      <Routes>
        <Route exact path="/singlepage/:id" element={<SinglePage />}></Route>
        <Route exact path="/categorypage" element={<CategoryPage />}></Route>
        <Route exact path="/homepage" element={<HomePage />}></Route>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
