import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useFormik } from "formik";
import { useLoginMutation } from "../slices/postqueries/userqueriesApi.js";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import { loginSchema } from "../formSchemas/index.js";
import { useLoginAdminMutation } from "../slices/postqueries/adminqueriesApi.js";

const FormInput = ({ tags, disabled }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [createCredentials, { isError: createIsError, error: createError }] =
    useLoginMutation();

  const [
    createCredentialsAdmin,
    { isError: updateIsError, error: updateError },
  ] = useLoginAdminMutation();

  const initialValues = {
    username: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
      try {
        if (tags === "Admin") {
          const res = await createCredentialsAdmin({
            username: values.username,
            password: values.password,
          }).unwrap();
          console.log("Admin login details ", res);

          if (res) {
            const token = res.token;
            if (token) {
              localStorage.setItem("token", token); // Set token in local storage
            }
            toast.success("Admin login successfull", {
              autoClose: 2000,
            });
            navigate("/adminSchemes");
          } else {
            toast.error("Error in admin login");
          }
        } else {
          const res = await createCredentials({
            username: values.username,
            password: values.password,
          }).unwrap();
          console.log(res);

          if (res) {
            toast.success("User login succcessfull", {
              autoClose: 2000,
            });
            navigate("/userSchemes");
          } else {
            toast.error("User Login error");
          }
        }
        action.resetForm();
      } catch (err) {
        if (createIsError || updateIsError) {
          console.log(
            createIsError
              ? createError
              : updateError ||
                  "An error occurred while creating. Please try again later."
          );
          toast.error(
            createIsError
              ? createError.error
              : updateError.error ||
                  "An error occurred while updating. Please try again later."
          );
        } else {
          console.log(err);
          toast.error(err?.data?.error || err.data);
        }
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`p-4 m-4 rounded-lg shadow-lg w-4/5 h-4/5 md:w-1/2 md:h-4/5 ${
        disabled ? "bg-red-500" : "bg-primary"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-4xl text-white text-center font-semibold mb-4">
          {tags} Login!!
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
              disabled={disabled}
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
                disabled={disabled}
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
            className={`bg-white w-1/3 text-xl text-blue-500 font-semibold py-2 mt-5 rounded hover:text-blue-500 hover:bg-gray-200   md:w-1/4 ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={disabled}
          >
            Login
          </button>
          {tags === "User" ? (
            <span className="text-gray-300 text-md">
              Don't have an account?{" "}
              <Link
                className={`text-2xl text-white rounded-md no-underline hover:no-underline hover:text-black `}
                to="/signup/user"
              >
                Signup
              </Link>
            </span>
          ) : (
            <span className="text-gray-300 text-md">
              Don't have an account?{" "}
              <Link
                className={`text-2xl text-white rounded-md no-underline hover:no-underline hover:text-black `}
                to="/signup/admin"
              >
                Signup
              </Link>
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormInput;
