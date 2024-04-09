import React from "react";
import Dropdown from "./Dropdown";

const CheckLogin = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl mb-4">404 Page not found!</h1>
        <p className="text-xl mb-4">Please login first</p>
        <Dropdown isLogin={false} />
      </div>
    </div>
  );
};

export default CheckLogin;
