import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import PersonalInfoForm from "./PersonalInfoForm";

const SignupForm = () => {
  return (
    <section className=" h-[500px] w-full border-gray-200 border bg-white rounded-xl">
      <div className="h-[100px] border-gray-300 border bg-[#FAFAFA] p-4 flex justify-between items-center">
        <div className=" flex flex-col items-center w-[200px] cursor-pointer border-gray-300 border-r-2">
          <AiOutlineUser size={30} className=" m-2" />
          <h2>Personal Details</h2>
        </div>
      </div>
      <div>
        <PersonalInfoForm />
      </div>
    </section>
  );
};

export default SignupForm;
