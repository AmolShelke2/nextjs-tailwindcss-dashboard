import React from "react";

const PersonalInfoForm = () => {
  return (
    <div className="h-full w-full py-10 relative">
      <form className=" flex justify-between items-start px-8 h-full">
        <div className="flex flex-col w-[350px]">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            required
            className=" w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2"
          />
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter full name"
            className=" w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2 capitalize"
            required
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="Mobile Number"
            className=" w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2"
            required
          />
          <label>DOB</label>
          <input
            type="Date"
            className="uppercase w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2"
            required
          />
        </div>

        <div className="flex flex-col  w-[350px]">
          <p className=" mb-3">Gender</p>
          <div className=" flex flex-row items-center text-center">
            <input
              type="radio"
              id="html"
              name="male"
              value="male"
              className="cursor-pointer"
            />
             <label className=" mr-5">Male</label>
            <input
              type="radio"
              id="html"
              name="male"
              value="male"
              className="cursor-pointer"
            />
             <label>Female</label>
          </div>
        </div>
        <button
          type="submit"
          className="absolute bottom-0 right-10 bg-blue-500 text-white px-12 py-3 rounded-lg">
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
