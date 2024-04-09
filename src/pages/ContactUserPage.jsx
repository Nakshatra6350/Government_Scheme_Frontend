import React from "react";
import { Link } from "react-router-dom";
import SchemeHeader from "../components/SchemeHeader";
import ContactUser from "../components/ContactUser";
import Footer from "./Footer";

const ContactUserPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <SchemeHeader />
      <ContactUser />
      <Footer />
    </div>
  );
};

export default ContactUserPage;
