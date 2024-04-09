import React from "react";
import SchemeHeader from "../components/SchemeHeader";
import Footer from "./Footer";
import Card from "../components/Card";
import { useGetSchemeQuery } from "../slices/getqueries/schemequeriesApi";
import schemeBG from "../assets/scheme.jpg";

const Scheme = () => {
  const { data: schemesData, isLoading, isError } = useGetSchemeQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!schemesData) {
    return null; // Or display a message indicating that no data is available
  }

  // console.log(schemesData);

  const titlesAndDescriptions =
    schemesData?.schemes.map((scheme) => ({
      title: scheme.title,
      description: scheme.description,
      imageURL: `${scheme.imageURL.replace(/\\/g, "/")}`,
      date: scheme.date,
    })) || [];

  console.log(titlesAndDescriptions);

  // const allCards = schemesData
  //   ? schemesData.map((item) => ({
  //       title: item.title,
  //       description: item.description,
  //     }))
  //   : [];
  // const cards = [
  //   { title: "Card 1", description: "Description for Card 1" },
  //   { title: "Card 2", description: "Description for Card 2" },
  //   { title: "Card 3", description: "Description for Card 3" },
  //   { title: "Card 4", description: "Description for Card 4" },
  //   { title: "Card 5", description: "Description for Card 5" },
  //   { title: "Card 6", description: "Description for Card 6" },
  //   // Add more cards as needed
  // ];
  const contentStyle = {
    flex: 1,
    // Add any additional styling for the content here
  };
  const divStyle = {
    backgroundImage: `url(${schemeBG})`, // Set the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // minHeight: "100vh", // Set the minimum height to cover the viewport
  };

  return (
    <div style={divStyle}>
      <SchemeHeader islogin={false} />
      <div style={contentStyle}>
        <Card cards={titlesAndDescriptions} />
      </div>
      <Footer />
    </div>
  );
};

export default Scheme;
