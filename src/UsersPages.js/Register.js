import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
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
          {
            alert("Successfull Login");
          this.props.history.push("/HomePage");
          }
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
                  <CardBody className="p-4">
                    <Form>
                      <div class="row" className="mb-2 pageheading">
                        <div class="col-sm-12 btn btn-primary">
                          Sign Up
                        </div>
                      </div>
                      <InputGroup className="mb-3">
                        <Input type="text" onChange={this.userName} placeholder="Enter Employee Name" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="text" onChange={this.userEmail} placeholder="Enter Email" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="password" onChange={this.userPassword} placeholder="Enter Password" />
                      </InputGroup>
                      <Button onClick={this.register} color="success" block>Create Account</Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Reg;

