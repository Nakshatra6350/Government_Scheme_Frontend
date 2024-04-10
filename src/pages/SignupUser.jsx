import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useFormik } from "formik";
import { useSignupMutation } from "../slices/postqueries/userqueriesApi.js";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../assets/scheme.jpg";
import { signupSchema } from "../formSchemas/index.js";
import Footer from "./Footer.jsx";

const SignupUser = ({ tags, disabled }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [createCredentials, { isError: createIsError, error: createError }] =
    useSignupMutation();
  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values, action) => {
      try {
        const res = await createCredentials({
          email: values.email,
          username: values.username,
          password: values.password,
        }).unwrap();
        console.log(res);

        if (res) {
          toast.success("User Signup succcessfull", {
            autoClose: 2000,
          });
          navigate("/login/user");
        } else {
          toast.error("User Signup error");
        }
        action.resetForm();
      } catch (err) {
        if (createIsError) {
          console.log(
            createIsError
              ? createError
              : "An error occurred while creating. Please try again later."
          );
          toast.error(
            createIsError
              ? createError.error
              : "An error occurred while updating. Please try again later."
          );
        } else {
          console.log(err);
          toast.error(err?.data?.error || err.data);
        }
      }
    },
  });

  const handleBackClick = () => {
    navigate("/login/user");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const divStyle = {
    backgroundImage: `url(${signupImg})`, // Set the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "93.5vh", // Set the minimum height to cover the viewport
  };
  return (
    <>
      <div style={divStyle}>
        <div className="w-full mb-20 h-full flex justify-center items-center">
          <div
            className={`p-4  rounded-lg  w-full h-4/5 md:w-1/2 md:h-4/5 bg-transparent`}
          >
            <div className="flex w-full justify-between items-center">
              <h1 className="text-4xl mt-10 text-gray-500 font-bold mb-10 ">
                Hi Welcome to Signup Page.
              </h1>
              <button
                onClick={handleBackClick}
                className="bg-red-500 text-white border border-green rounded-lg px-8 py-2 transition duration-300 ease-in-out hover:bg-red-600 hover:text-white "
              >
                ← Back to home
              </button>
            </div>
            <p className=" text-gray-400 font-semibold">
              Welcome to our secure Signup portal. Please enter your username,
              email and password to create your account. We prioritize the
              security of your personal information, and all data entered on
              this page is encrypted to ensure confidentiality.
            </p>
            <div className=" flex-col bg-blue-500 opacity-80 rounded-lg  justify-center h-full w-full">
              <h1 className="text-4xl mt-20 text-white text-center font-semibold mb-4">
                User Signup!!
              </h1>
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center justify-center gap-y-4 p-10 w-full"
              >
                <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
                  <label
                    className="text-2xl mr-2 text-white w-32 font-semibold"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={`bg-white text-black border-2 w-full md:w-1/2 p-4 rounded-md ${
                      disabled ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    required
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div className="error text-white text-md">
                    {formik.errors.email}
                  </div>
                )}
                <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
                  <label
                    className="text-2xl mr-2 text-white w-32 font-semibold"
                    htmlFor="email"
                  >
                    Username:
                  </label>
                  <input
                    type="name"
                    name="username"
                    placeholder="Enter your username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    className={`bg-white text-black border-2 w-full md:w-1/2 p-4 rounded-md ${
                      disabled ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    required
                  />
                </div>
                {formik.touched.username && formik.errors.username && (
                  <div className="error text-white text-md">
                    {formik.errors.username}
                  </div>
                )}
                <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
                  <label
                    className="text-2xl text-white mr-2 w-32 font-semibold"
                    htmlFor="password"
                  >
                    Password:
                  </label>
                  <div className="relative w-full md:w-1/2">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formik.values.password}
                      placeholder="Enter your password"
                      onChange={formik.handleChange}
                      className={`bg-white text-black border-2 w-full p-4 rounded-md ${
                        disabled ? "opacity-70 cursor-not-allowed" : ""
                      } text-black`}
                      required
                    />
                    {!disabled && (
                      <div
                        className="absolute text-2xl text-gray-500 right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                      </div>
                    )}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="error text-white text-md">
                    {formik.errors.password}
                  </div>
                )}
                {/* <Button
            name={credential}
            disabled={disabled}
            classNames={`bg-white w-1/2 flex items-center justify-center text-md text-primary mt-5 rounded md:w-1/4 ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }  hover:bg-gray-200`}
          />
          {createError && (
            <p className="text-white text-md">Error Creating Credentials</p>
          )}
          {updateError && (
            <p className="text-white text-md">Error Updating Credentials</p>
          )} */}
                <button
                  className={`bg-white w-1/3 text-xl text-blue-500 font-semibold py-2 mt-5 rounded hover:text-blue-500 hover:bg-gray-200   md:w-1/4    
            }`}
                  type="submit"
                >
                  Login
                </button>

                <span className="text-gray-300 text-md">
                  Already have an Account?{" "}
                  <Link
                    className={`text-2xl text-white rounded-md no-underline hover:no-underline hover:text-black `}
                    to="/login/user"
                  >
                    Login
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupUser;
