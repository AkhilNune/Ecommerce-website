// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import React from "react";
// import Header from './Header';
// import Slider from './Slider';
// import NewsLetter from './NewsLetter';
// import Footer from './Footer';
// import Login from './Login';
// import HomePage from './users/HomePage'
// import { Router } from '@material-ui/icons';
// function Home() {
//     return (
//         <div className='Home'>
//             <BrowserRouter>
//                 <Header />
//                 <Slider />
//                 <NewsLetter />
//                 <Footer />
//                 <Route path="/users/HomePage">
//                 <HomePage/>
//             </Route>
//             </BrowserRouter>
           
//         </div>
//     )
// }
// export default Home

import React from "react";
import Slider from "./Slider";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <div>
        <Header />
      <Slider />
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default Home;