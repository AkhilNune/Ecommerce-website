import React from 'react';
import { css } from 'styled-components';
import image from '../img/logo.png';
import Footer from "../EmployeeComponents/Footer";
import Header from "../EmployeeComponents/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wap = styled.p`
padding-left:30px;
font-size: 20px;
`;

const Courses= () => {
    return (
        <div>
            <Header />
            <div className="about">
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <img src={image} height={300} width={300} ></img>

                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">Courses</h1><br></br>
                            <p>
                                Use the Below Link to access the Courses from <b>EASTech Learning platform</b>
                            </p>
                            <p>
                                <Wap>
                               <b> <Link>EASTechLearningPlatform.com </Link></b>
                               </Wap>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Courses