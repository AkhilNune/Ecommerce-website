import React from "react";
import Announcement from "../usersComponents/Announcement";
import Navbar from "../usersComponents/Navbar";
import Slider from "../usersComponents/Slider";
import Categories from "../usersComponents/Categories";
import Products from "../usersComponents/Products";
import Newsletter from "../usersComponents/Newsletter";
import Footer from "../usersComponents/Footer";
const HomePage = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  );
};

export default HomePage;