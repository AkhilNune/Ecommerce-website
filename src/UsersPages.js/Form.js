import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/macbook-1.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Form1 = () => {

  return (
    <Container>
      <Wrapper>
        <Title>Form</Title>
        <Form>
          <Input placeholder="Full name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone Number" />
          <Input placeholder="pincode" />
          <Input placeholder="Address" />
          <Input placeholder="Description" />

          <Agreement>
            By submitting the Form, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
            <br></br>
           <b> Our Sales Execute will reach out for further process</b>
          </Agreement>

          <Button>Form Submit</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Form1;