import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".modal-content")) {
        onClose();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-1/2 md:w-1/4 h-1/4 overflow-hidden relative modal-content">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 md:top-1 md:right-4 m-2 bg-white border border-red-500 text-red-400 font-medium rounded-md hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          className="p-2 h-full bg-white flex flex-col gap-y-4 items-center overflow-auto "
          style={{ scrollbarWidth: "thin" }}
        >
          <h1 className="text-3xl text-center text-gray-800 font-semibold mt-2">
            Login as
          </h1>
          <Link
            to="/login/user"
            className="bg-blue-500 w-32 text-center hover:no-underline text-white border border-green rounded-lg px-8 py-2 transition duration-300 ease-in-out hover:bg-red-600 hover:text-white "
          >
            User
          </Link>
          <Link
            to="/login/admin"
            className="bg-blue-500 w-32 text-center text-white hover:no-underline border border-green rounded-lg px-8 py-2 transition duration-300 ease-in-out hover:bg-red-600 hover:text-white "
          >
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
