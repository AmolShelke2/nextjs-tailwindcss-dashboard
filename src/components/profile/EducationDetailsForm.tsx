import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  dob: string;
  gender: string;
}

interface EducationDetailsFormProps {
  onBack: () => void;
}

const EducationDetailsForm: React.FC<EducationDetailsFormProps> = ({
  onBack,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    gender: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="h-full w-full py-10 relative">
      <form
        className="flex justify-start gap-10 items-start px-8 h-full"
        onSubmit={handleSubmit}>
        <div className="flex flex-col w-[350px]">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            required
            className="w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2"
            onChange={handleInputChange}
          />
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2 capitalize"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <label>Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Mobile Number"
            className="w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2"
            required
            onChange={handleInputChange}
          />
          <label>DOB</label>
          <input
            type="date"
            name="dob"
            className="uppercase w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2"
            required
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="absolute bottom-0 left-10 bg-blue-500 text-white px-12 py-3 rounded-lg"
          onClick={onBack}>
          Back
        </button>

        <button
          type="submit"
          className="absolute bottom-0 right-10 bg-blue-500 text-white px-12 py-3 rounded-lg">
          Next
        </button>
      </form>
    </div>
  );
};

export default EducationDetailsForm;
