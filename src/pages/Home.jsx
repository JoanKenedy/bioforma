import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Promociones from "../components/Promociones";
import Services from "../components/Services";
import Galery from "../components/Galery";
import BarraContact from "../components/BarraContact";
import Footer from "../components/Footer";

import Modal from "../components/Modal";
import Ortodoncia from "../components/Ortodoncia";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <Services />
      <About />

      <Promociones />
      <BarraContact />
      <Ortodoncia />
      <Galery />

      <Footer />
    </div>
  );
};

export default Home;
