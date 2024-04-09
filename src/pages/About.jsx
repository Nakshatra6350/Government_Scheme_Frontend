import React from "react";
import SchemeHeader from "../components/SchemeHeader";
import Footer from "./Footer";
import AboutBody from "../components/AboutBody";
const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <SchemeHeader />
        <AboutBody />
        <Footer />
      </div>
    </>
  );
};

export default About;
