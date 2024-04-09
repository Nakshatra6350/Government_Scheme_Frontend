import React from "react";
import Header from "../components/Header";
import home from "../assets/home3.jpg";
import Footer from "./Footer";

const Home = ({ isLogin }) => {
  const containerStyle = {
    backgroundImage: `url(${home})`, // Set the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };

  const contentStyle = {
    flex: 1,
    // Add any additional styling for the content here
  };

  return (
    <div style={containerStyle}>
      <Header islogin={isLogin} />
      <div style={contentStyle}>{/* Add your page content here */}</div>
      <Footer />
    </div>
  );
};

export default Home;
