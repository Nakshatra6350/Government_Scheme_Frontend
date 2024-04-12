import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import contactImg from "../assets/contact.jpg";
import Footer from "../pages/Footer";

const ContactAdmin = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the email and message to your backend
    // For demonstration purposes, we'll just log them to the console
    console.log("Email:", email);
    console.log("Message:", message);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col mx-10 px-8 ">
        <div className="flex p-5">
          <div className="flex-col p-3 mb-5">
            <h1 className="text-2xl text-black font-bold">Contact Us</h1>
            <p className="mb-5">
              This is the Official Portal of the Government of India, designed,
              developed and hosted by the{" "}
              <Link
                to="https://www.nic.in/"
                className="text-blue-500 no-underline hover:no-underline hover:text-blue-600"
              >
                National Informatics Centre (NIC)
              </Link>
              , a premier ICT organization of the Government of India under the
              aegis of the{" "}
              <Link
                to="https://www.meity.gov.in/"
                className="text-blue-500 no-underline hover:no-underline hover:text-blue-600"
              >
                Ministry of Electronics & Information Technology
              </Link>
              . Welcome to the Government Scheme Portal, your go-to destination
              for comprehensive information on a wide array of government
              schemes aimed at improving the lives of citizens across the
              nation. Our platform is dedicated to providing detailed insights
              into various schemes, ranging from healthcare and education to
              employment and social welfare, ensuring that you stay informed
              about the initiatives that matter most to you. Whether you have
              questions about our services, need help with an order, or simply
              want to provide feedback, we're here to listen. Your satisfaction
              is our priority, and we're committed to resolving any issues or
              concerns you may have promptly.he portal was launched in November
              2005.Delve into the rich tapestry of our nation's history with the
              Government Scheme Portal's dedicated section on historical
              milestones and achievements. From the struggle for independence to
              the formation of modern democratic institutions, our platform
              offers a curated collection of pivotal moments that have shaped
              the course of our nation's development.
            </p>
          </div>
        </div>
        <div className=" flex flex-row justify-center items-center h-1/4 mb-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactAdmin;
