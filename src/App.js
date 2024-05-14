// import logo from './logo.svg';
// import react, { Component } from 'react';
// import './App.css';
// import { Button, Navbar } from 'react-bootstrap'
// import Header from './Header';
// import { BrowserRouter,Route, Routes} from 'react-router-dom'
// import Login from './Login';
// import Register from './Register';
// import AddProducts from './AddProducts';
// import Home from './Home';
// import AboutPage from './AboutPage';
// import UpdateProduct from './UpdateProduct'
// import Career from './Career'



// function App() {
//     return (
//         <div className="/Home">

//             <BrowserRouter>
//                 <Route path="/Home">
//                         <Home />
//                         </Route>

//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from "./UsersPages.js/HomePage";
import Home from "./Home";
import AboutPage from "./AboutPage";
import ProductList from './UsersPages.js/ProductList';
import Products from "./UsersPages.js/Products";
import Login from "./UsersPages.js/Login";
import Career from "./Career";
import Service from "./Service";
import EmpLogin from "./EmpLogin";
import Cart from "./UsersPages.js/Cart";
import Form from "./UsersPages.js/Form";
import HomePage1 from "./EmployeePages/HomePage1";
import Register from "./Register";
import Contact from './UsersPages.js/Contact';
import Courses from './EmployeeComponents/Courses';
import servers from './EmployeeComponents/servers';
const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Home">
                        <Home />
                    </Route>
                    <Route exact path="/HomePage">
                        <HomePage />
                    </Route>
                    <Route path="/AboutPage">
                        <AboutPage />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path="/EmpLogin">
                        <EmpLogin />
                    </Route>
                    <Route path="/Register">
                        <Register />
                    </Route>
                    <Route path="/Products">
                        <ProductList />
                    </Route>
                    <Route path="/Career">
                        <Career />
                    </Route>
                    <Route path="/Services">
                        <Service />
                    </Route>
                    <Route path="/products/:category">
                        <ProductList />
                    </Route>
                    <Route path="/product/:id">
                        <Products />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/form">
                        <Form />
                    </Route>
                    <Route path="/employee/home">
                        <HomePage1 />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/courses">
                        <Courses />
                    </Route>
                    <Route path="/servers">
                        <servers/>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
};

export default App;
