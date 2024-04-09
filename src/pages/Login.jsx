import React from "react";
import FormInput from "../components/FormInput";
import loginBG from "../assets/login.jpg";
import Footer from "./Footer";

const Login = ({ role }) => {
  const divStyle = {
    backgroundImage: `url(${loginBG})`, // Set the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // minHeight: "100vh", // Set the minimum height to cover the viewport
  };
  return (
    <>
      <div className={`p-4  h-screen `} style={divStyle}>
        <div className="flex flex-col items-center w-full h-full">
          <h1 className="text-4xl text-white font-bold  ">
            Hi Welcome to Login Page.
          </h1>
          <div className="flex flex-col items-center md:flex-row md:justify-center items-center w-3/4 h-2/3">
            {role === "User" ? (
              <>
                <FormInput tags={role} />
                <FormInput tags="Admin" disabled={true} />
              </>
            ) : (
              <>
                <FormInput tags={role} />
                <FormInput tags="User" disabled={true} />
              </>
            )}
          </div>
          <p className="px-10 text-white font-semibold">
            In India, government schemes play a pivotal role in addressing
            socio-economic challenges and uplifting the lives of its citizens.
            With a diverse population and multifaceted development needs, the
            Indian government has devised an array of schemes spanning various
            sectors to ensure inclusive growth and development across the
            nation. One of the flagship schemes is the Pradhan Mantri Jan Dhan
            Yojana (PMJDY), aimed at financial inclusion by providing access to
            banking services for the unbanked population. Launched in 2014,
            PMJDY has been instrumental in bringing millions into the formal
            banking system, offering them avenues for savings, insurance, and
            credit facilities. Another notable initiative is the Mahatma Gandhi
            National Rural Employment Guarantee Act (MGNREGA), which guarantees
            100 days of wage employment in a financial year to rural households,
            thereby enhancing livelihood security and rural development. The
            Digital India initiative aims at transforming India into a digitally
            empowered society and knowledge economy..
          </p>
          <p className="px-10 text-white font-semibold">
            Welcome to our secure login portal. Please enter your username and
            password to access your account. We prioritize the security of your
            personal information, and all data entered on this page is encrypted
            to ensure confidentiality.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
