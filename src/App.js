import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for conditional redirects
import Schemes from "./pages/Schemes";
import About from "./pages/About";
import Login from "./pages/Login";
import CheckLogin from "./components/CheckLogin";
import SchemesAdmin from "./pages/SchemesAdmin";
import AddScheme from "./components/AddScheme";
import SignupUser from "./pages/SignupUser";
import SignupAdmin from "./pages/SignupAdmin";
import EditScheme from "./pages/EditScheme";
import AboutAdmin from "./pages/AboutAdmin";
import ContactUserPage from "./pages/ContactUserPage";
import ContactAdminPage from "./pages/ContactAdminPage";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    // Update token state when localStorage changes
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [token]);
  return (
    <div className="w-full h-full">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop={false}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
      <Routes>
        <Route path="/" element={<Home isLogin={false} />} />

        {token ? ( // Check if token exists in localStorage
          <>
            <Route path="/about" element={<About />} />
            <Route path="/aboutPage" element={<AboutAdmin />} />
            <Route path="/userSchemes" element={<Schemes />} />
            <Route path="/adminSchemes" element={<SchemesAdmin />} />
            <Route path="/contactUser" element={<ContactUserPage />} />
            <Route path="/contactAdmin" element={<ContactAdminPage />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<CheckLogin />} />
            <Route path="/about" element={<CheckLogin />} />
            <Route path="/aboutPage" element={<CheckLogin />} />
            <Route path="/userSchemes" element={<CheckLogin />} />
            <Route path="/adminSchemes" element={<CheckLogin />} />
            <Route path="/contactUser" element={<CheckLogin />} />
            <Route path="/contactAdmin" element={<CheckLogin />} />
          </>
        )}
        <Route path="/login/user" element={<Login role="User" />} />
        <Route path="/login/admin" element={<Login role="Admin" />} />
        {/* <Route path="/addScheme" element={<AddScheme />} /> */}
        <Route path="/signup/user" element={<SignupUser />} />
        <Route path="/signup/admin" element={<SignupAdmin />} />
        {/* <Route path="/editScheme" element={<EditScheme />} /> */}
        {/* Redirect to home if token is not present */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
