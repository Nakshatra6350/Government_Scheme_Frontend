import React from "react";
import { BASE_URL } from "../constant";
import schemeBG from "../assets/scheme.jpg";
import { Link } from "react-router-dom";

const Card = ({ cards }) => {
  const divStyle = {
    backgroundImage: `url(${schemeBG})`, // Set the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // minHeight: "100vh", // Set the minimum height to cover the viewport
  };
  return (
    <div style={divStyle}>
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <div key={index} className="w-full sm:w-1/3 p-4">
            <div
              className="card-container bg-white shadow-md mb-0 rounded-lg p-4 flex flex-col justify-between overflow-y-auto"
              style={{ scrollbarWidth: "thin", maxHeight: "48rem" }}
            >
              <div>
                <img
                  src={`${BASE_URL}/${card.imageURL}`}
                  alt={card.imageURL}
                  className="object-fill  h-96 w-full mb-2 rounded-lg"
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

export default Card;
