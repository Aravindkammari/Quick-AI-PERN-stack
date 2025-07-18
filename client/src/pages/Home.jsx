import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";
import Testimonials from "../components/Testimonials";
import Plan from "../components/Plan";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonials/>
      <Plan/>
    </>
  );
};

export default Home;
