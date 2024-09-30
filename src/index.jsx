import React from "react";
import ReactDOM from "react-dom/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// the Zod schema for  validation
const schema = z.object({
  firstName: z
    .string()
    .min(1, { message: "*Required" })
    .regex(/^[A-Za-z]+$/, { message: "No special characters or numbers allowed!" }),
  lastName: z
    .string()
    .min(1, { message: "*Required" })
    .regex(/^[A-Za-z]+$/, { message: "No special characters or numbers allowed!" }),
  email: z
    .string()
    .email({ message: "This is not a valid email!" })
    .min(1, { message: "*Required" }),
  contact: z.string().regex(/^\d{10}$/, "Contact must be exactly 10 digits"),
  gender: z.enum(["Male", "Female", "Other"], { required_error: "*Required" }),
  experience: z.enum(["Fresher", "Less than 5 years", "More than 5 years"], {
    required_error: "*Required",
  }),
  jobrole: z.enum(["Front-end developer", "Back-end developer", "Full Stack developer"], {
    required_error: "*Required",
  }),
  resume: z
    .any()
    .refine((file) => file?.length === 1, { message: "Resume is required" }),
  skills: z.string().min(1, { message: "*Required" }),
  about: z.string().min(1, { message: "*Required" }),
});

const App = () => {
  
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  
  const watchedFields = watch();

  
  const onSubmit = (data) => {
    console.log("Form Data:", data);
   
    reset();
    document.getElementById("final").textContent = "Thank you for Registering ";
  };

  
  const handleReset = () => {
    reset();
    document.getElementById("finalmsg").textContent = "";
  };

  return (
    <div className="flex justify-center mx-auto 2xl:container">
      <div className="w-[90%] max-w-[800px] bg-pink-200 border-r-8 border shadow-lg mt-[20px] p-4">
        <h1 className="pt-3 pb-5 text-3xl font-bold text-center text-black">WINDSKY</h1>
        <form className="grid grid-cols-1 gap-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="firstName">
              First Name
            </label>
            <input
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Enter First Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </div>

          {/* Last Name */}
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Enter Last Name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="email">
              Email
            </label>
            <input
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              type="email"
              placeholder="Enter Email"
              {...register("email")}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          {/* Contact */}
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="contact">
              Contact
            </label>
            <input
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Enter Phone"
              {...register("contact")}
            />
            {errors.contact && (
              <span className="text-red-500">{errors.contact.message}</span>
            )}
          </div>

          {/* Gender */}
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="gender">
              Gender
            </label>
            <div className="flex gap-4">
              <label>
                <input type="radio" value="Male" {...register("gender")} /> Male
              </label>
              <label>
                <input type="radio" value="Female" {...register("gender")} /> Female
              </label>
              <label>
                <input type="radio" value="Other" {...register("gender")} /> Other
              </label>
            </div>
            {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
          </div>

          {/* Experience */}
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="experience">
              Experience
            </label>
            <select
              className="border border-white rounded-md w-[300px] focus:outline-none focus:ring-0"
              {...register("experience")}
            >
              <option value="">Select Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="Less than 5 years">Less than 5 years</option>
              <option value="More than 5 years">More than 5 years</option>
            </select>
            {errors.experience && (
              <span className="text-red-500">{errors.experience.message}</span>
            )}
          </div>

          {/* Job Role */}
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="jobrole">
              Job Role
            </label>
            <select
              className="border border-white rounded-md w-[300px] focus:outline-none focus:ring-0"
              {...register("jobrole")}
            >
              <option value="">Select Job Role</option>
              <option value="Front-end developer">Front-end developer</option>
              <option value="Back-end developer">Back-end developer</option>
              <option value="Full Stack developer">Full Stack developer</option>
            </select>
            {errors.jobrole && (
              <span className="text-red-500">{errors.jobrole.message}</span>
            )}
          </div>

          {/* Resume */}
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="resume">
              Resume
            </label>
            <input type="file" {...register("resume")} />
            {errors.resume && <span className="text-red-500">{errors.resume.message}</span>}
          </div>

          {/* Skills */}
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="skills">
              Skills
            </label>
            <textarea
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              placeholder="Enter Skills"
              {...register("skills")}
            ></textarea>
            {errors.skills && <span className="text-red-500">{errors.skills.message}</span>}
          </div>

          {/* About */}
          <div className="flex items-center justify-center gap-x-4">
            <label className="block font-serif text-xl w-[150px]" htmlFor="about">
              About
            </label>
            <textarea
              className="box-border w-[300px] border border-white rounded-md p-1 focus:outline-none focus:ring-0"
              placeholder="Enter Description"
              {...register("about")}
            ></textarea>
            {errors.about && <span className="text-red-500">{errors.about.message}</span>}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center mt-4 gap-x-4">
            <button
              className="text-white bg-pink-700 border border-none rounded-md w-[70px] h-[30px]"
              type="button"
              onClick={handleReset}
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

          {/* Final Message */}
          <div id="final" className="mt-4 font-semibold text-center text-green-600"></div>
        </form>

      </div>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);