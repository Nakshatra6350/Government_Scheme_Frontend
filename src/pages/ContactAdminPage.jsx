import React from "react";
import SchemeAdminHeader from "../components/SchemeAdminHeader";
import ContactAdmin from "../components/ContactAdmin";
import Footer from "./Footer";

const ContactAdminPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <SchemeAdminHeader />
      <ContactAdmin />
      <Footer />
    </div>
  );
};

export default ContactAdminPage;
