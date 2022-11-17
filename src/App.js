import Header from "./components/Header";
import Categories from "./components/Categories";
import BigSlider from "./components/BigSlider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <BigSlider />
      {/* <Sidebar /> */}
      <Footer />
    </>
  );
}

export default App;
