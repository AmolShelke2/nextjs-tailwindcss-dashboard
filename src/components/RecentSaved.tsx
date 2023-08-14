import React from "react";
import { RxPerson } from "react-icons/rx";
import { users } from "@/constant/data";

export const RecentSaved = () => {
  return (
    <div className="w-full col-span-2 lg:col-span-1 bg-white rounded-lg lg:h-[60vh] h-[50vh] overflow-y-scroll mb-8 shadow p-6 border border-1">
      <h2 className="text-lg font-semibold capitalize">Recent users</h2>
      <div className="flex flex-col justify-start items-start my-4 gap-4">
        {users.map((user) => (
          <div
            className="flex justify-between items-center bg-gray-200 w-full h-[80px] rounded-lg p-4"
            key={user.username}>
            <div>
              <h3 className="flex items-center gap-2 capitalize">
                <div className=" bg-purple-700 hover:scale-150 p-4 text-white rounded-lg transition-all hidden sm:block">
                  <RxPerson size={20} />
                </div>
                {user.username.split("_").join(" ")}
              </h3>
            </div>

            <p className="text-sm text-gray-600 font-thin tracking-wider capitalize">
              {user.user_status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
