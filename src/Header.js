// import { Navbar, Nav, Dropdown, NavDropdown } from "react-bootstrap"
// import { Link } from 'react-router-dom'
// function Header() {
//     return (
//         <div>
//             <Navbar bg="dark" variant="dark">

//                 <Navbar.Brand href="#home">Eastech</Navbar.Brand>
//                 <Nav className="me-auto navbar_wrapper">
//                     <Link to="/Home">Home</Link>
//                     <Link to="/AboutPage">AboutPage</Link>
//                     <NavDropdown
//                         id="nav-dropdown-dark-example"
//                         title="Dropdown"
//                         menuVariant="dark"
//                         className="dropdown"
//                     >
//                         <NavDropdown.Item href="/AboutPage">General info</NavDropdown.Item>
//                         <NavDropdown.Item href="/Login">Login Page</NavDropdown.Item>
//                         <NavDropdown.Item href="/Register">Register page</NavDropdown.Item>
//                         <NavDropdown.Item href="/Add">Product Details</NavDropdown.Item>
//                         <NavDropdown.Item href="/career">Career oppourtunity</NavDropdown.Item>
//                         <NavDropdown.Item href="/AboutPage">Contact Details</NavDropdown.Item>
//                     </NavDropdown>
//                 </Nav>

//             </Navbar>

//         </div>
//     )
// }
// export default Header


import { Badge } from "@material-ui/core";
import { Navbar, Nav, Dropdown, NavDropdown } from "react-bootstrap"

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import image from './img/logo.png';


const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 0.5;
  display: flex;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                <img src={image} height={45} width={45} ></img>
                
                    <Logo>  EASTech</Logo>
                    
                </Center>
                <Right>
                <MenuItem>About Page</MenuItem>
                <MenuItem></MenuItem>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            More Info
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/Home">General info</Dropdown.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Login   Pages
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/Login">Users Login </Dropdown.Item>
                                    <Dropdown.Item href="/EmpLogin">Employee Login</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown.Item href="/Products">Product Details</Dropdown.Item>
                            <Dropdown.Item href="/career">Career oppourtunity</Dropdown.Item>
                            <Dropdown.Item href="/contact">Contact Details</Dropdown.Item>
                            <Dropdown.Item href="/Services">Company Services</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Header