import React from 'react';
import './Testimonials.css';
import {Carousel} from 'react-bootstrap';
// import 'react-owl-carousel2/style.css';
// import 'react-owl-carousel2/src/owl.theme.default.css'

import Testimonial1 from '../../assets/img/team-3.jpg'
import Testimonial2 from '../../assets/img/team-2.jpg'
import Testimonial3 from '../../assets/img/team-4.jpg'

const Testimonials = () => {
    return (
        <div>
            <div className="containerr">
                <div className="testimonial wow fadeInUp" data-wow-delay="0.1s">
                    <div className="section-header text-center">
                        <p>Testimonial</p>
                        <h2>Our Client Say!</h2>
                    </div>

                
                    <div className="owl-carousel testimonials-carousel">

                    <Carousel >
                    <Carousel.Item interval={5000}>
                        <div className="testimonial-img">
                            <img src={Testimonial1} alt="Image"
                            className="d-block w-50 "/>
                        </div>
                        <Carousel.Caption >
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                        <div className="testimonial-img">
                            <img src={Testimonial2} alt="Image"
                            className="d-block w-50"/>
                        </div>
                    <Carousel.Caption>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                         <div className="testimonial-img">
                            <img src={Testimonial3} alt="Image"
                            className="d-block w-50"/>
                        </div>
                    <Carousel.Caption>
                    <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Testimonials;