import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "react-dropdown/style.css";
import { toast } from "react-toastify";
import AddScheme from "./AddScheme";
import { useLogoutAdminMutation } from "../slices/postqueries/adminqueriesApi";
const SchemeAdminHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // const handleClick = () => {
  //   setShowComponent(true);
  // };
  const navigate = useNavigate();
  const [logoutHandler, { isError, logoutError }] = useLogoutAdminMutation();
  const handleLogout = async () => {
    try {
      const res = await logoutHandler();
      console.log(res);
      if (res.data) {
        const token = localStorage.getItem("token");
        console.log(token);
        if (token) {
          localStorage.removeItem("token"); // Set token in local storage
        }
        toast.success("User logout successfull", {
          autoClose: 2000,
        });
        navigate("/");
      } else {
        toast.error("Error in User logut");
      }
    } catch (err) {
      if (isError) {
        console.log(logoutError);
        toast.error(logoutError);
      }
      console.log(err);
      toast.error(err?.data?.error || err.data);
    }
  };
  return (
    <div className="p-5 flex justify-around items-center">
      <div className="flex justify-center items-center gap-x-3">
        <img
          src="data:image/png;base64,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"
          style={{ height: "60px" }}
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-red-500 text-3xl font-bold">
            Sabka Saath Sabka Vishwas
          </span>
          <span className="font-bold">A Government Initiative</span>
        </div>
      </div>
      <div className="flex items-center text-black">
        <ul className="flex flex-row items-center gap-x-10">
          {/* <a
            href="/"
            className="text-3xl  text-black p-2 no-underline hover:no-underline hover:text-red-500 hover:cursor-pointer"
          >
            Home
          </a> */}
          <a
            href="/aboutPage"
            className="text-3xl p-2 no-underline hover:no-underline hover:text-red-500 hover:cursor-pointer"
          >
            About
          </a>
          <a
            href="/adminSchemes"
            className="text-3xl p-2 no-underline hover:no-underline  hover:text-red-500 hover:cursor-pointer"
          >
            Schemes
          </a>
          <a
            href="/contactAdmin"
            className="text-3xl p-2 no-underline hover:no-underline hover:text-red-500 hover:cursor-pointer"
          >
            Contact
          </a>
          <button
            onClick={(event) => handleClick(event)}
            className="text-3xl p-2 no-underline hover:no-underline hover:text-red-500 hover:cursor-pointer"
          >
            Add Schemes
          </button>
          <AddScheme isOpen={isModalOpen} onClose={handleCloseModal} />
        </ul>
      </div>

      {/* <Dropdown isLogin={true} /> */}

      <Link
        to="/"
        className="bg-red-500 text-white border border-green rounded-lg px-8 py-2 transition duration-300 ease-in-out hover:no-underline hover:bg-red-600 hover:text-white "
        onClick={handleLogout}
      >
        Logout
      </Link>
    </div>
  );
};

export default SchemeAdminHeader;
