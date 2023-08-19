import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  college: string;
  university: string;
  course: string;
  dateOfPassing: string;
}

const EducationDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    college: "",
    university: "",
    course: "",
    dateOfPassing: "",
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
    console.log("Education Data:", formData);
  };

  return (
    <div className="h-full w-full py-10 relative">
      <form
        className="flex justify-start gap-10 items-start px-8 h-full"
        onSubmit={handleSubmit}>
        <div className="flex flex-col w-[350px]">
          <label>College</label>
          <input
            type="text"
            name="college"
            placeholder="Enter full name"
            required
            className="w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2"
            onChange={handleInputChange}
          />
          <label>Course</label>
          <input
            type="text"
            name="course"
            placeholder="Enter Course name"
            className="w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col w-[350px] mb-8">
          <label>University</label>
          <input
            type="text"
            name="university"
            placeholder="Mobile Number"
            className="w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2"
            required
            onChange={handleInputChange}
          />
          <label>Date of passing</label>
          <input
            type="date"
            name="dateOfPassing"
            className="uppercase w-full mb-8 mt-4 border-gray-400 py-2 border focus:outline-none rounded-sm px-2"
            required
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="absolute bottom-0 left-10 bg-blue-500 text-white px-12 py-3 rounded-lg">
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
