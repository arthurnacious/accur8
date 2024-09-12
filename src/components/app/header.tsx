import React, { FC } from "react";
import { Menu, Bell, User, SeparatorHorizontal } from "lucide-react";

interface Props {
  toggleSidebar: () => void;
}

const Header: FC<Props> = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between bg-white shadow-md px-5 h-14">
      <div className="flex items-center text-neutral-800">
        <span className="text-md font-bold">Tenet Tenent</span>{" "}
        <SeparatorHorizontal className="ml-4" />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          <Menu size={24} />
        </button>
        <div className="flex items-center">
          <button className="p-2 text-gray-400 hover:text-gray-600 duration-300">
            <Bell size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 duration-300">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
