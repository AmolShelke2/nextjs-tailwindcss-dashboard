import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiWhiteBook } from "react-icons/gi";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationDetailsForm from "./EducationDetailsForm";

const SignupForm = () => {
  const [tab, setTab] = useState(1);

  const handleTabChange = (newTab: any) => {
    setTab(newTab);
  };

  return (
    <section className="h-[500px] w-full border-gray-200 border bg-white rounded-xl">
      <div className="h-[100px] border-gray-300 border bg-[#FAFAFA] p-4 flex justify-start gap-4 items-center">
        <div
          className={`flex flex-col items-center w-[200px] cursor-pointer border-gray-300 border-r-2 ${
            tab === 1 ? "bg-gray-100" : ""
          }`}
          onClick={() => handleTabChange(1)}>
          <AiOutlineUser size={30} className="m-2" />
          <h2>Personal Details</h2>
        </div>
        <div
          className={`flex flex-col items-center w-[200px] cursor-pointer border-gray-300 border-r-2 ${
            tab === 2 ? "bg-gray-100" : ""
          }`}
          onClick={() => handleTabChange(1)}>
          <GiWhiteBook size={30} className="m-2" />
          <h2>Education Details</h2>
        </div>
        {/* Render other tab similarly */}
      </div>
      <div>
        {tab === 1 ? (
          <PersonalInfoForm onNext={() => handleTabChange(2)} />
        ) : (
          <EducationDetailsForm onBack={() => handleTabChange(1)} />
        )}
      </div>
    </section>
  );
};

export default SignupForm;
