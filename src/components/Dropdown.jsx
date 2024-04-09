import React, { useState } from "react";
import Modal from "./Modal";

const Dropdown = ({ isLogin }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };
  const buttonText = isLogin ? "Logout" : "Login";
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleViewClick}
        className="bg-red-500 text-white border border-green rounded-lg px-8 py-2 transition duration-300 ease-in-out hover:bg-red-600 hover:text-white "
      >
        {buttonText}
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Dropdown;
