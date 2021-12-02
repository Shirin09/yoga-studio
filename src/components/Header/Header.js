import React from "react";
import HeroImg from "../../assets/img/hero.png";
import AboutImg from "../../assets/img/about.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <>
    <div className="hero">
    <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
                <div className="hero-text">
                    <h1>Yoga Practice For Good Health</h1>
                    <p>
                        Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                    </p>
                    <div className="hero-btn">
                        <Link to="/classes">
                        <a className="btn" >Join Now</a>
                        </Link>
                        <Link to="/contacts">
                        <a className="btn" >Contact Us</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 d-none d-md-block">
                <div className="hero-image">
                    <img src={HeroImg} alt="Hero Image"/>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="about wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="about-img">
                            <img src={AboutImg} alt="Image"/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="section-header text-left">
                            <p>Learn About Us</p>
                            <h2>Welcome to Yooga</h2>
                        </div>
                        <div className="about-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
                            </p>
                            <a className="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
};

export default Header;
