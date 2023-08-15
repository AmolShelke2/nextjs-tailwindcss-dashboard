import { useDashboardContext } from "./Provider";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";

export function TopBar() {
  const { toggleSidebar } = useDashboardContext();
  return (
    <header className="relative z-10 h-16 w-full items-center bg-white md:h-20">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="relative left-0 flex h-full w-full">
            <div className="group relative flex justify-between h-full w-30 items-center mr-4">
              <AiOutlineMenu
                size={20}
                onClick={toggleSidebar}
                className="text-4xl text-[#2a3547] focus:outline-none cursor-pointer mr-5"
              />
              <AiOutlineSearch
                size={20}
                className="text-4xl text-[#2a3547] focus:outline-none cursor-pointer"
              />
            </div>
            <div className="group relative flex h-full items-center lg:w-[600px] ml-4">
              <ul className=" flex w-full gap-4 items-center">
                <li className=" font-normal cursor-pointer text-sm">Home</li>
                <li className=" font-normal cursor-pointer text-sm">About</li>
                <li className=" font-normal cursor-pointer text-sm">Contact</li>
                <li className=" font-normal cursor-pointer text-sm">
                  Calendar
                </li>
              </ul>
            </div>
          </div>
          <div className="relative ml-5 flex w-1/4 items-center justify-end p-1 sm:right-auto sm:mr-4">
            <a href="#" className="mr-6">
              <AiOutlineShoppingCart
                size={25}
                className="text-[#2a3547] focus:outline-none cursor-pointer"
              />
            </a>
            <a href="#" className="mr-6">
              <MdNotificationsActive
                size={25}
                className="text-[#2a3547] focus:outline-none cursor-pointer"
              />
            </a>
            <a href="#" className="relative block">
              <img
                alt="Jonathan Ilunga"
                src="/images/4.jpg"
                className="mx-auto h-10 w-10 rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
