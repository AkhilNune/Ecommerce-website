import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardGroup, Col, InputGroup, Container, Form, Input, Button, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

function EmpLogin() {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {

    }
  }, [])

  async function login() {
    let item = { userEmail, userPassword };
    let result = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    alert("successful login")
    history.push('/HomePage')
  }

  return (
    <div>
      <Header />

      <div className=" app flex-row align-items-center">
        <Container>
          <Row className=" justify-content-center">
            <Col md="9" lg="7" xl="6">

              <CardGroup>
                <Card className="p-5">
                  <CardBody>
                    <Form>
                      <div class="row" className="mb-5 pageheading">
                        <div class="col-sm-12 btn btn-primary">
                          Login Page
                        </div>
                      </div>
                      <InputGroup className="mb-5">
                        <Input type="text" onChange={(e) => setuserEmail(e.target.value)} placeholder="Enter Email" />
                      </InputGroup>
                      <InputGroup className="mb-5">

                        <Input type="password" onChange={(e) => setuserEmail(e.target.value)} placeholder="Enter Password" />
                      </InputGroup>
                      <Button onClick={login} color="success" block>
                        Login</Button>
                      <div className="p-3">
                        <Link to="/Register">CREATE A NEW ACCOUNT</Link>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  )
}
export default EmpLogin;
