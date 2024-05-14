import React from "react";
import Navbar from "../EmployeeComponents/Navbar";
import Footer from "../EmployeeComponents/Footer";
import Slider from "../EmployeeComponents/Slider";
import Services from "../EmployeeComponents/Services";
const HomePage1 = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Services/>
        <Footer/>
    </div>
  );
};

export default HomePage1;