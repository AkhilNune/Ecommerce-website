import React from 'react';
import { css } from 'styled-components';
import image from './img/logo.png';
import Footer from "./Footer";
import Header from "./Header";


const AboutPage = () => {
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
                            <h1 class="font-weight-light">About</h1>
                            <p>
                            With over four decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey. We do it by enabling the enterprise with an AI-powered core that helps prioritize the execution of change.
                             We also empower the business with agile digital at scale to deliver unprecedented levels of performance and customer delight. Our always-on learning agenda drives their continuous improvement through building and transferring digital skills, expertise, and ideas from our innovation ecosystem.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default AboutPage