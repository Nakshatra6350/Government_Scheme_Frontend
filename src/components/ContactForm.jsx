import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { useAddSchemeMutation } from "../slices/postqueries/postqueriesApi.js";
import { toast } from "react-toastify";
import { emailSchema, schemeSchema } from "../formSchemas/index.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "../pages/Footer.jsx";
import contactImg from "../assets/contact.jpg";
import emailjs from "@emailjs/browser";

import { BASE_URL, POST_SCHEMES } from "../constant.js";
import addSchemeImage from "../assets/addScheme.jpg";
const ContactForm = () => {
  const form = useRef();

  const initialValues = {
    email: "",
    message: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: emailSchema,
    onSubmit: (values, action) => {
      try {
        emailjs.sendForm("service_kd3b54r", "template_et3em8e", form.current, {
          publicKey: "_qhTE3JPXHppTKG7d",
        });
        console.log("Message sent successfully");
        toast.success("Message sent successfully", { autoClose: 2000 });
        action.resetForm();
      } catch (err) {
        console.error("Error sending message:", err);
        toast.error("Error sending message. Please try again later.", {
          autoClose: 2000,
        });
      }
    },
  });
  const divStyle = {
    backgroundImage: `url(${contactImg})`, // Set the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // minHeight: "93.5vh", // Set the minimum height to cover the viewport
  };

  return (
    <>
      <div style={divStyle} className=" rounded-md w-1/2 h-full ">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="p-4 m-4 rounded-lg opacity-100 flex-row justify-center items-center w-full h-full"
            //   style={divStyle}
          >
            <div className="flex flex-col items-center justify-center h-full w-full">
              <h1 className="text-3xl  font-bold text-center font-semibold ">
                Contact Us
              </h1>
              <form
                ref={form}
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center justify-center gap-y-2 p-10 w-full"
              >
                <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
                  <label
                    className="text-2xl  mr-8  w-32 font-bold"
                    htmlFor="title"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="bg-white opacity-80 text-black border-2 w-full md:w-1/2 p-2 rounded-md hover:opacity-100"
                    required
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div className="error  text-md">{formik.errors.email}</div>
                )}
                <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
                  <label
                    className="text-2xl  mr-8 w-32 font-bold"
                    htmlFor="message"
                  >
                    Message:
                  </label>
                  <textarea
                    name="message"
                    placeholder="Enter message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    className="bg-white opacity-80 text-black border-2 h-20 w-1/2 p-2 rounded-md hover:opacity-100"
                    required
                  />
                </div>
                {formik.touched.message && formik.errors.message && (
                  <div className="error text-amber-100 text-md">
                    {formik.errors.message}
                  </div>
                )}
                <button
                  className="bg-gray-200 opacity-90 w-1/3 text-xl font-semibold py-2 mt-5 rounded hover:textblack hover:bg-gray-200 hover:opacity-100 md:w-1/4"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
