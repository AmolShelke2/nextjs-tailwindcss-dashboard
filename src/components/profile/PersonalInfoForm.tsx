import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  studying_in: string;
  educational_interest: string;
  current_city: string;
  interested_course: string;
  future_study_location: string;
  message: string;
}

const PersonalInfoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    studying_in: "",
    educational_interest: "",
    current_city: "",
    interested_course: "",
    future_study_location: "",
    message: "",
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
    alert(
      "Successfully logged in " + formData.first_name + " " + formData.last_name
    );
  };

  return (
    <div className="flex flex-col gap-9">
      {/* <!-- Contact Form --> */}
      <div className="rounded-lg border border-stroke bg-white shadow-default">
        <div className="border-b border-stroke py-4 px-6">
          <h3 className="font-medium text-black">Personal Information</h3>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2 block text-black">First name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  onChange={handleInputChange}
                  name="first_name"
                  value={formData.first_name}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                  required
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2 block text-black">Last name</label>
                <input
                  type="text"
                  name="last_name"
                  onChange={handleInputChange}
                  value={formData.last_name}
                  placeholder="Enter your last name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                  required
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2 block text-black">
                  Email <span className="text-meta-1">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  onChange={handleInputChange}
                  value={formData.email}
                  name="email"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                  required
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2 block text-black">
                  Phone Number <span>(optional)</span>
                </label>
                <input
                  type="number"
                  onChange={handleInputChange}
                  value={formData.phone_number}
                  name="phone_number"
                  placeholder="Enter your phone number"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                  required
                />
              </div>
            </div>

            <div className="mb-4 w-full xl:w-1/2">
              <label className="mb-2 block text-black">
                Password <span className="text-meta-1"></span>
              </label>
              <input
                type="password"
                onChange={handleInputChange}
                value={formData.password}
                required
                name="password"
                placeholder="Password or otp"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-black">Studying in</label>
              <div className="relative z-20 bg-transparent">
                <select
                  required
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary">
                  <option value="">Currently studying in</option>
                  <option value="">UG</option>
                  <option value="">PG</option>
                  <option value="">8-10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                </select>
                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-black">
                Educational Interest
              </label>
              <div className="relative z-20 bg-transparent">
                <select
                  required
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary">
                  <option value="">Type your education interest</option>
                  <option value="">Engineering & arch</option>
                  <option value="">Managment (MBA,BBA)</option>
                  <option value="">Medical (MBBS, M.S,Dental, )</option>
                  <option value="">Law(LLB,LLM)</option>
                  <option value="">Animation & Design (B.Des, M.DES)</option>
                  <option value="">
                    Media, Mass communcation and journalism ( B JMC, BMC)
                  </option>
                  <option value="">Arts humaties and social sciences</option>
                  <option value="">Sciences ( B.sc,Msc)</option>
                  <option value="">Agriculture</option>
                  <option value="">Compouter Application And IT</option>
                  <option value="">Pharmacy ( M pharm , B Pharm )</option>
                  <option value="">Education ( B.ED, MED)</option>
                  <option value="">Hospality and Tourism ( BHM, MHM)</option>
                </select>
                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2 block text-black">Current city</label>
                <input
                  type="text"
                  required
                  onChange={handleInputChange}
                  value={formData.current_city}
                  name="current_city"
                  placeholder="Enter current city"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2 block text-black">
                  Interested course
                </label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={formData.interested_course}
                  required
                  name="interested_course"
                  placeholder="Enter Interested course"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-black">
                Future study location
              </label>
              <div className="relative z-20 bg-transparent">
                <select
                  required
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary">
                  <option value="">States</option>
                  <option value="">Karnataka</option>
                  <option value="">Maharastra</option>
                  <option value="">Andhra Pradesh</option>
                </select>
                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-black">Message</label>
              <textarea
                required
                rows={6}
                placeholder="Type your message"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary 
                disabled:cursor-default disabled:bg-whiter"></textarea>
            </div>

            <button className="flex w-full justify-center rounded bg-[#3C50E0] p-3 font-medium text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
