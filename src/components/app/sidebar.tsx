"use client";

import React, { FC, Fragment, useState } from "react";
import {
  ChartColumn,
  Cog,
  DollarSign,
  FileText,
  Home,
  Layers,
  LifeBuoy,
  Settings,
  X,
} from "lucide-react";
import MenuItem from "./menu-item";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: FC<Props> = ({ isOpen, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const menuItems = [
    {
      title: "menu",
      items: [
        {
          title: "Dashboard",
          icon: <ChartColumn size={18} />,
        },
        {
          title: "Financial",
          icon: <DollarSign size={18} />,
          children: [
            { title: "Revenue", link: "/financial/revenue" },
            { title: "Expenses", link: "/financial/expenses" },
            { title: "Profit", link: "/financial/profit" },
          ],
        },
        {
          title: "Stock",
          icon: <Layers size={18} />,
        },
        {
          title: "Reports",
          icon: <FileText size={18} />,
          children: [
            { title: "Monthly", link: "/reports/monthly" },
            { title: "Quarterly", link: "/reports/quarterly" },
            { title: "Yearly", link: "/reports/yearly" },
          ],
        },
        {
          title: "Settings",
          icon: <Settings size={18} />,
          children: [
            { title: "User Profile", link: "/settings/profile" },
            { title: "Preferences", link: "/settings/preferences" },
          ],
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "Settings",
          icon: <Cog size={18} />,
        },
        {
          title: "Support",
          icon: <LifeBuoy size={18} />,
        },
      ],
    },
  ];

  const toggleMenu = (index: number | null) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <aside
      className={`bg-white w-52 min-h-screen p-4 ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex h-10 justify-between items-center mb-6 border-b border-neutral-200 pb-3">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Sequence Inc
        </h2>
        <button
          onClick={toggleSidebar}
          className="text-neutral-900 focus:outline-none lg:hidden"
        >
          <X size={24} />
        </button>
      </div>
      <div className="mt-8 mb-3 flex h-[calc(100%-(3.5rem+0.75rem))] justify-between flex-col gap-10">
        <div className="mt-8 flex flex-col gap-10">
          {menuItems.map(({ title, items }) => (
            <div key={title}>
              <div className="text-sm text-neutral-500 pb-2">{title}</div>
              <nav>
                {items.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    isActive={activeMenu === index}
                    onClick={() => toggleMenu(index)}
                  />
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="flex items-center text-sm text-neutral-500 mt-auto gap-2 truncate bg-gray-300 rounded-md p-2">
          <Image
            src="/rdm.jpg"
            alt="rdm"
            width={200}
            height={200}
            className="rounded-full size-10 object-cover"
          />
          <div className="flex flex-col">
            <div className="text-md font-bold text-neutral-800 truncate">
              Arthurnacious
            </div>
            <div>Administrator</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
