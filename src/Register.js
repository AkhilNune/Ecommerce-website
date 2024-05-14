import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";
class Reg extends Component {

  constructor() {
    super();

    this.state = {
      userName: '',
      userEmail: '',
      userPassword: ''
    }


    this.userName = this.userName.bind(this);
    this.userEmail = this.userName.bind(this);
    this.userPassword = this.userPassword.bind(this);
    this.register = this.register.bind(this);
  }



  userName(event) {
    this.setState({ userName: event.target.value })
  }

  userEmail(event) {
    this.setState({ userEmail: event.target.value })
  }

  userPassword(event) {
    this.setState({ userPassword: event.target.value })
  }

  register(event) {

    fetch('http://localhost:5000/Api/UserLogin', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({


        userName: this.state.userName,
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        if (Result.Status == 'Success')
          this.props.history.push("/HomePage");
        else
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
      })
  }

  render() {

    return (
      <div>
        <Header />
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="9" lg="7" xl="6">
                <Card className="mx-4">
                  <CardBody className="p-5">
                    <Form>
                      <div class="row" className="mb-5 pageheading">
                        <div class="col-sm-12 btn btn-primary">
                          Sign Up Page
                        </div>
                      </div>
                      <InputGroup className="mb-5">
                        <Input type="text" onChange={this.userName} placeholder="Enter Your Name" />
                      </InputGroup>
                      <InputGroup className="mb-5">
                        <Input type="email" onChange={this.userEmail} placeholder="EnterYour  Email" />
                      </InputGroup>
                      <InputGroup className="mb-5">
                        <Input type="password" onChange={this.userPassword} placeholder="Enter Your Password" />
                      </InputGroup>
                      <Button onClick={this.register} color="success" block>Create Your Account</Button>
                      <div className="p-3">
                        <Link to="/Login">Click Here to access Login Page</Link>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Reg;

