
import { Badge } from "@material-ui/core";
import { Nav, Dropdown, NavDropdown } from "react-bootstrap"

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import image from '../img/logo.png';


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

const Navbar = () => {
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
              <Dropdown.Item href="/AboutPage">Profile DashBoard</Dropdown.Item>
              <Dropdown.Item href="/products">Job category</Dropdown.Item>
              <Dropdown.Item href="https://portal.azure.com/" target="_blank">Server Login</Dropdown.Item>
              <Dropdown.Item href="/courses">Courses</Dropdown.Item>
              <Dropdown.Item href="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;