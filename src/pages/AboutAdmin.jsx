import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import AboutBody from "../components/AboutBody";
import SchemeAdminHeader from "../components/SchemeAdminHeader";
import AboutAdminBody from "../components/AboutAdminBody";
const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <SchemeAdminHeader />
        <AboutAdminBody />
        <Footer />
      </div>
    </>
  );
};

export default About;
