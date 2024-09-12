"use client";
import React, { FC, useState } from "react";
import Sidebar from "@/components/app/sidebar";
import Header from "@/components/app/header";

type Props = {
  children: React.ReactNode;
};

const AppLayout: FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {/* Main content goes here */}
          {children}
          {/* Add your dashboard widgets and content here */}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
