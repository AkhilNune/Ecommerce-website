import React from 'react';
import { css } from 'styled-components';
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";

import { CardHeader } from '@material-ui/core';

const Arr = styled.text`
    padding-left:100px;
    font-size:50px;
    display: flex;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  margin: 20px 10px 0px 0px;

  padding: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Payment = styled.img`
width: 100%;
`;
const Career = () => {
    return (
        <div>
            <Header />
            <div className="about">
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                        <Payment src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/macbook-1.png" />
                        </div>
                        <div class="col-lg-5">
                            <Arr class="font-weight-light">Get In Touch</Arr>
                            <Form>
                                <Input placeholder="Full name" />
                                <Input placeholder="Email" />
                                <Input placeholder="Message" />
                            </Form>
                            <Button> Submit</Button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Career;