import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "../src/index.css";

const App = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    experience: "",
    jobrole: "",
    resume: "",
    about: "",
    skills: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const ResetFun = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      contact: "",
      experience: "",
      jobrole: "",
      resume: "",
      about: "",
      skills: "",
    });
  };

  return (
    <div className="flex justify-center mx-auto 2xl:container">
      <div className="w-[90%] max-w-[800px] bg-pink-200 border-r-8 border shadow-lg mt-[20px] p-4">
        <h1 className="pt-3 pb-5 text-3xl font-bold text-center text-black">WINDSKY</h1>
        <form className="grid grid-cols-1 gap-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="firstname">
              First Name
            </label>
            <input
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Enter First Name"
              name="firstname"
              onChange={(e) => handleChanges(e)}
              required
              value={values.firstname}
            />
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Enter Last Name"
              name="lastname"
              onChange={(e) => handleChanges(e)}
              required
              value={values.lastname}
            />
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="email">
              Email
            </label>
            <input
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => handleChanges(e)}
              required
              value={values.email}
            />
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="contact">
              Contact
            </label>
            <input
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Enter phone"
              name="contact"
              onChange={(e) => handleChanges(e)}
              required
              value={values.contact}
            />
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px] mr-[90px]" htmlFor="gender">
              Gender
            </label>
            <div className="flex gap-4">
              <label>
                <input
                  className="focus:outline-none focus:ring-0"
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => handleChanges(e)}
                />{" "}
                Male
              </label>
              <label>
                <input
                  className="focus:outline-none focus:ring-0"
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => handleChanges(e)}
                />{" "}
                Female
              </label>
              <label>
                <input
                  className="focus:outline-none focus:ring-0"
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={(e) => handleChanges(e)}
                />{" "}
                Other
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="experience">
              Experience
            </label>
            <select
              className="border border-white rounded-md w-[300px] focus:outline-none focus:ring-0"
              name="experience"
              onChange={(e) => handleChanges(e)}
              value={values.experience}
            >
              <option value="Fresher">Fresher</option>
              <option value="Less than 5 years">Less than 5 years</option>
              <option value="More than 5 years">More than 5 years</option>
            </select>
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="jobrole">
              Job Role
            </label>
            <select
              className="border border-white rounded-md w-[300px] focus:outline-none focus:ring-0"
              name="jobrole"
              onChange={(e) => handleChanges(e)}
              value={values.jobrole}
            >
              <option value="Front-end developer">Front-end developer</option>
              <option value="Back-end developer">Back-end developer</option>
              <option value="Full Stack developer">Full Stack developer</option>
            </select>
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="resume">
              Resume
            </label>
            <input
              className="w-[300px] focus:outline-none focus:ring-0"
              type="file"
              name="resume"
              onChange={(e) => handleChanges(e)}
            />
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="skills">
              Skills
            </label>
            <textarea
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              name="skills"
              id="skills"
              cols="30"
              rows="4"
              placeholder="Enter Skills"
              onChange={(e) => handleChanges(e)}
              value={values.skills}
            ></textarea>
          </div>

          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="about">
              About
            </label>
            <textarea
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              name="about"
              id="about"
              cols="30"
              rows="4"
              placeholder="Enter description"
              onChange={(e) => handleChanges(e)}
              value={values.about}
            ></textarea>
          </div>

          <div className="flex items-center justify-center mt-4 gap-x-4">
            <button
              className="text-white bg-pink-700 border border-none rounded-md w-[70px] h-[30px]"
              type="button"
              onClick={ResetFun}
            >
              Reset
            </button>
            <button
              className="text-white bg-pink-700 border border-none rounded-md w-[70px] h-[30px]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
