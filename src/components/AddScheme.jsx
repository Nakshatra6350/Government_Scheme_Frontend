import React, { useEffect } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { schemeSchema } from "../formSchemas/index.js";
import { BASE_URL, POST_SCHEMES } from "../constant.js";
const AddScheme = ({ isOpen, onClose }) => {
  const initialValues = {
    title: "",
    description: "",
    imageURL: null,
    category: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: schemeSchema,
    onSubmit: async (values, action) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("imageURL", values.imageURL);
      formData.append("category", values.category);
      const headers = {
        token: localStorage.getItem("token"),
      };
      try {
        const response = await fetch(`${BASE_URL}${POST_SCHEMES}`, {
          method: "POST",
          body: formData,
          credentials: "include", // Include credentials if necessary
          headers: headers,
        });

        if (response.ok) {
          console.log(headers.token);
          toast.success("Scheme added successfully", { autoClose: 2000 });
          window.addEventListener("click", window.location.reload());
        } else {
          throw new Error("Failed to add scheme");
        }
        action.resetForm();
      } catch (err) {
        console.error("Error adding scheme:", err);
        toast.error("Error adding scheme. Please try again later.");
      }
    },
  });

  const handleFileChange = (event) => {
    formik.setFieldValue("imageURL", event.currentTarget.files[0]);
  };
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
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-60 ${
        isOpen ? "bg-gray-200 bg-opacity-10 blur-background" : ""
      }`}
    >
      <div className="bg-black border-none rounded-lg shadow-lg w-1/2 md:w-1/2 h-2/3 overflow-hidden relative modal-content">
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
          className="p-2 h-full bg-blue-500 flex flex-col gap-y-4 items-center overflow-auto "
          style={{ scrollbarWidth: "thin" }}
        >
          <h1 className="text-5xl text-center text-white font-bold mt-2">
            Add Schemes
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center justify-center gap-y-4 p-10 w-full"
          >
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
              <label
                className="text-4xl  mr-20 text-white w-32 font-semibold"
                htmlFor="title"
              >
                Title:
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                value={formik.values.title}
                onChange={formik.handleChange}
                className="bg-white opacity-90 text-black border-2 w-full md:w-1/2 p-4 rounded-md hover:opacity-100"
                required
              />
            </div>
            {formik.touched.title && formik.errors.title && (
              <div className="error text-white text-md">
                {formik.errors.title}
              </div>
            )}
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
              <label
                className="text-4xl  mr-20 text-white w-32 font-semibold"
                htmlFor="title"
              >
                Category:
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter category"
                value={formik.values.category}
                onChange={formik.handleChange}
                className="bg-white opacity-90 text-black border-2 w-full md:w-1/2 p-4 rounded-md hover:opacity-100"
                required
              />
            </div>
            {formik.touched.category && formik.errors.category && (
              <div className="error text-white text-md">
                {formik.errors.category}
              </div>
            )}
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
              <label
                className="text-4xl text-white mr-20 w-32 font-semibold"
                htmlFor="description"
              >
                Description:
              </label>
              <textarea
                name="description"
                placeholder="Enter description"
                value={formik.values.description}
                onChange={formik.handleChange}
                className="bg-white opacity-90 text-black border-2 w-1/2 p-4 rounded-md hover:opacity-100"
                required
              />
            </div>
            {formik.touched.description && formik.errors.description && (
              <div className="error text-white text-md">
                {formik.errors.description}
              </div>
            )}
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
              <label
                className="text-4xl rounded-md text-center px-2 py-1 text-white mr-20 w-32 font-semibold"
                htmlFor="image"
              >
                Image:
              </label>
              <input
                type="file"
                name="imageURL"
                accept="image/*"
                //   value={formik.setFieldValue("imageURL",event.currentTarget.files[0])}
                onChange={handleFileChange}
                className="bg-white opacity-90 text-black border-2 w-1/2 p-4 rounded-md hover:opacity-100"
                required
              />
            </div>
            {formik.touched.imageURL && formik.errors.imageURL && (
              <div className="error text-white text-md">
                {formik.errors.imageURL}
              </div>
            )}
            <button
              className="bg-gray-100 w-1/3 text-xl text-blue-500 font-semibold py-2 mt-5 rounded hover:text-blue-500 hover:bg-gray-300 md:w-1/4"
              type="submit"
            >
              Add Scheme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddScheme;

// const AddScheme = () => {
//   const navigate = useNavigate();

//   const initialValues = {
//     title: "",
//     description: "",
//     imageURL: null,
//   };
//   const formik = useFormik({
//     initialValues,
//     validationSchema: schemeSchema,
//     onSubmit: async (values, action) => {
//       const formData = new FormData();
//       formData.append("title", values.title);
//       formData.append("description", values.description);
//       formData.append("imageURL", values.imageURL);
//       const headers = {
//         token:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJuYW1lIjoiTmFrc2giLCJwYXNzd29yZCI6IiQyYSQxMCRLaHZiMVd4amFjNHRlY0lUdy9RSkNPMjVqV2k4cWJoV0o3d1VUMlduSTdwRDVTMmJoQkI0VyJ9LCJpYXQiOjE3MTI2NTgyNDEsImV4cCI6MTcxMjY2MTg0MX0.ZHWvBL0DkXroZxBw8ASHN36LsTCubLdOUchcG3_-M6E",
//       };
//       try {
//         const response = await fetch(`${BASE_URL}${POST_SCHEMES}`, {
//           method: "POST",
//           body: formData,
//           credentials: "include", // Include credentials if necessary
//           headers: headers,
//         });

//         if (response.ok) {
//           toast.success("Scheme added successfully", { autoClose: 2000 });
//           navigate("/adminSchemes");
//         } else {
//           throw new Error("Failed to add scheme");
//         }
//         action.resetForm();
//       } catch (err) {
//         console.error("Error adding scheme:", err);
//         toast.error("Error adding scheme. Please try again later.");
//       }
//     },
//   });

//   const handleFileChange = (event) => {
//     formik.setFieldValue("imageURL", event.currentTarget.files[0]);
//   };
//   const divStyle = {
//     backgroundImage: `url(${addSchemeImage})`, // Set the background image
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     minHeight: "93.5vh", // Set the minimum height to cover the viewport
//   };

//   return (
//     <>
//       <div style={divStyle} className="opacity-100">
//         <div className="w-full h-full flex justify-center items-center">
//           <div
//             className="p-4 m-4 mt-40 rounded-lg opacity-100 flex-row justify-center items-center w-1/2 h-1/2"
//             //   style={divStyle}
//           >
//             <div className="flex flex-col items-center justify-center h-full w-full">
//               <h1 className="text-6xl text-amber-100 font-bold text-center font-semibold mb-4">
//                 Please add your Scheme
//               </h1>
//               <form
//                 onSubmit={formik.handleSubmit}
//                 className="flex flex-col items-center justify-center gap-y-4 p-10 w-full"
//               >
//                 <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
//                   <label
//                     className="text-4xl  mr-20 text-amber-100 w-32 font-bold"
//                     htmlFor="title"
//                   >
//                     Title:
//                   </label>
//                   <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter title"
//                     value={formik.values.title}
//                     onChange={formik.handleChange}
//                     className="bg-white opacity-80 text-black border-2 w-full md:w-1/2 p-4 rounded-md hover:opacity-100"
//                     required
//                   />
//                 </div>
//                 {formik.touched.title && formik.errors.title && (
//                   <div className="error text-amber-100 text-md">
//                     {formik.errors.title}
//                   </div>
//                 )}
//                 <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
//                   <label
//                     className="text-4xl text-amber-100 mr-20 w-32 font-bold"
//                     htmlFor="description"
//                   >
//                     Description:
//                   </label>
//                   <textarea
//                     name="description"
//                     placeholder="Enter description"
//                     value={formik.values.description}
//                     onChange={formik.handleChange}
//                     className="bg-white opacity-80 text-black border-2 w-1/2 p-4 rounded-md hover:opacity-100"
//                     required
//                   />
//                 </div>
//                 {formik.touched.description && formik.errors.description && (
//                   <div className="error text-amber-100 text-md">
//                     {formik.errors.description}
//                   </div>
//                 )}
//                 <div className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center w-full">
//                   <label
//                     className="text-4xl rounded-md text-center px-2 py-1 text-amber-100 mr-20 w-32 font-semibold"
//                     htmlFor="image"
//                   >
//                     Image:
//                   </label>
//                   <input
//                     type="file"
//                     name="imageURL"
//                     accept="image/*"
//                     //   value={formik.setFieldValue("imageURL",event.currentTarget.files[0])}
//                     onChange={handleFileChange}
//                     className="bg-white opacity-80 text-black border-2 w-1/2 p-4 rounded-md hover:opacity-100"
//                     required
//                   />
//                 </div>
//                 {formik.touched.imageURL && formik.errors.imageURL && (
//                   <div className="error text-amber-100 text-md">
//                     {formik.errors.imageURL}
//                   </div>
//                 )}
//                 <button
//                   className="bg-red-500 w-1/3 text-xl text-amber-100 font-semibold py-2 mt-5 rounded hover:text-blue-500 hover:bg-gray-200 md:w-1/4"
//                   type="submit"
//                 >
//                   Add Scheme
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AddScheme;
