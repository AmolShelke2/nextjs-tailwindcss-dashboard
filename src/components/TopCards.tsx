import React from "react";

export const TopCards = () => {
  return (
    <div className="hidden lg:grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-fit pb-4">
          <p className="text-2xl font-normal py-2">$7,846</p>
          <p className="text-gray-600">Daily revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-fit pb-4">
          <p className="text-2xl font-normal py-2">7,846</p>
          <p className="text-gray-600">Daily Users</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>

      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-fit pb-4">
          <p className="text-2xl font-normal py-2">10,000</p>
          <p className="text-gray-600">Students</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
    </div>
  );
};
