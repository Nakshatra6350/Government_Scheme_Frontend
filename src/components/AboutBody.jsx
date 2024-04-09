import React from "react";
import aboutImg from "../assets/about.jpg";
import { Link } from "react-router-dom";

const AboutBody = () => {
  return (
    <div>
      <div className="flex flex-col mx-10 px-8">
        <div className="flex p-5">
          <img src={aboutImg} alt="" />
          <div className="flex-col p-3 mb-5">
            <h1 className="text-2xl text-black font-bold">About Us</h1>
            <p className="mb-5">
              This is the Official Portal of the Government of India, designed,
              developed and hosted by the{" "}
              <Link
                to="https://www.nic.in/"
                className="text-blue-500 no-underline hover:no-underline hover:text-blue-600"
              >
                National Informatics Centre (NIC)
              </Link>
              , a premier ICT organization of the Government of India under the
              aegis of the{" "}
              <Link
                to="https://www.meity.gov.in/"
                className="text-blue-500 no-underline hover:no-underline hover:text-blue-600"
              >
                Ministry of Electronics & Information Technology
              </Link>
              . Welcome to the Government Scheme Portal, your go-to destination
              for comprehensive information on a wide array of government
              schemes aimed at improving the lives of citizens across the
              nation. Our platform is dedicated to providing detailed insights
              into various schemes, ranging from healthcare and education to
              employment and social welfare, ensuring that you stay informed
              about the initiatives that matter most to you.
            </p>
            <h1 className="text-2xl font-bold">History</h1>
            <p className="mb-5">
              The Portal has been developed as a Mission Mode Project (MMP)
              under the{" "}
              <Link
                to="https://www.meity.gov.in/divisions/national-e-governance-plan"
                className="text-blue-500 no-underline hover:no-underline hover:text-blue-600"
              >
                National E-Governance Plan (NEGP)
              </Link>{" "}
              of the Government. The portal was launched in November 2005.Delve
              into the rich tapestry of our nation's history with the Government
              Scheme Portal's dedicated section on historical milestones and
              achievements. From the struggle for independence to the formation
              of modern democratic institutions, our platform offers a curated
              collection of pivotal moments that have shaped the course of our
              nation's development.
            </p>
          </div>
        </div>
        <h1 className="text-2xl font-bold">Objective/Vision</h1>
        <p className="mb-5">
          The objective behind the Portal is to provide a single window access
          to the information and services being provided by the Indian
          Government for citizens and other stakeholders. An attempt has been
          made through this Portal to provide comprehensive, accurate, reliable
          and one stop source of information about India and its various facets.
          The current Portal is a metadata driven site that links to the other
          Indian Government Portals/websites for most updated information.
        </p>
        <h1 className="text-2xl font-bold">Portal Management</h1>
        <p className="mb-5">
          The content of this Portal is managed centrally by the National Portal
          Content Management Team from the National Portal Secretariat{" "}
          <Link
            to="https://www.nic.in/org_structure/"
            className="text-blue-500 no-underline hover:no-underline hover:text-blue-600"
          >
            Organization Chart
          </Link>
          . It is our goal to continue the enhancement and enrichment of this
          Portal in terms of content coverage, design and technology on a
          regular basis. Our team of dedicated professionals works tirelessly to
          ensure that the portal remains a reliable source of information for
          citizens across the country. From updating the latest scheme details
          to maintaining a user-friendly interface, we strive to enhance user
          experience and accessibility. Through continuous feedback and
          improvement, we aim to make the portal a one-stop destination for all
          your scheme-related queries and needs. Join us in our mission to
          provide transparent, efficient, and citizen-centric services through
          our portal management efforts.
        </p>
      </div>
    </div>
  );
};

export default AboutBody;
