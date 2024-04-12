import React, { useState } from "react";
import { BASE_URL, DELETE_SCHEMES } from "../constant";
import schemeBG from "../assets/scheme.jpg";
import { Link } from "react-router-dom";
import DustbinImage from "../assets/dustbin.png"; // Import dustbin image
import EditImage from "../assets/edit.png"; // Import edit image
import EditScheme from "../pages/EditScheme";
import { toast } from "react-toastify";

const CardAdmin = ({ cards }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = (event, id) => {
    event.stopPropagation();
    localStorage.setItem("cardId", id);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  console.log("Id : ", cards[0].id);
  const divStyle = {
    backgroundImage: `url(${schemeBG})`, // Set the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // minHeight: "100vh", // Set the minimum height to cover the viewport
  };
  const handleDelete = async (id) => {
    console.log("deleteid: ", id);
    try {
      const response = await fetch(`${BASE_URL}${DELETE_SCHEMES}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete scheme");
      }
      toast.success("Scheme deleted successfully", { autoClose: 2000 });
      console.log("Scheme deleted successfully");
      window.location.reload();
      // Add any additional logic you need after successful deletion
    } catch (error) {
      console.error("Error deleting scheme:", error.message);
      // Handle the error as needed
    }
  };

  return (
    <div style={divStyle}>
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <div key={index} className="w-full sm:w-1/3 p-4">
            <div
              className="bg-white shadow-md mb-0 rounded-lg p-4 flex flex-col justify-between max-h-96 overflow-y-auto"
              style={{ scrollbarWidth: "thin", maxHeight: "48rem" }}
            >
              <div>
                <img
                  src={`${BASE_URL}/${card.imageURL}`}
                  alt={card.imageURL}
                  className="object-fill h-96 w-full mb-2 rounded-lg"
                />
                <h1 className="text-2xl font-bold italic mb-2">
                  Scheme: {card.title}
                </h1>
                <h3 className="text-xl font-bold italic mb-2">
                  Category: {card.category}
                </h3>
                <div className="text-gray-700 mb-2">
                  Description: {card.description}
                </div>
                <span className="text-gray-600 font-bold italic">
                  Date posted: {card.date.split("T")[0]}
                </span>
              </div>

              <div className="mt-auto text-center relative">
                <button
                  onClick={() => handleDelete(card.id)}
                  className="text-white rounded-full w-13 h-6 flex justify-end items-center transition duration-300 ease-in-out hover:text-white absolute right-4 bottom-4"
                >
                  <img
                    src={DustbinImage}
                    alt="Delete"
                    className="w-9 h-10 hover:w-10 hover:h-11"
                  />
                </button>
                <button
                  onClick={(event) => handleViewClick(event, card.id)}
                  className="text-white rounded-full w-12 h-5 flex justify-start items-center transition duration-300 ease-in-out hover:text-white no-underline hover:no-underline absolute left-4 bottom-4"
                >
                  <img
                    src={EditImage}
                    alt="Edit"
                    className="w-8 h-9 hover:w-9 hover:h-10"
                  />
                </button>
                <EditScheme isOpen={isModalOpen} onClose={handleCloseModal} />
                <Link
                  to="https://www.india.gov.in/my-government/schemes"
                  className="bg-red-500 text-white rounded-lg px-8 py-2 transition duration-300 ease-in-out hover:no-underline hover:bg-red-600 hover:text-white inline-block mt-4 ml-4"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardAdmin;
