import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Classes from "../Classes/Classes";
import Price from "../Price/Price";
import Testimonials from "../Testimonials/Testimonials";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Classes />
      <Price />
      <Testimonials />
      <Team />{" "}
      <a href="/">
        up<i class="fas fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default Home;
