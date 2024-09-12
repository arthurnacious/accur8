import React, { FC } from "react";
import Logo from "@/components/logo";
import { ArrowRight, PieChart, Shield, Clock } from "lucide-react";
import Navigation from "@/components/landing/navigation";

type Props = {
  children: React.ReactNode;
};

const LandingLayout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Jobs
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Press
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Privacy
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-400 hover:text-gray-300"
              >
                Terms
              </a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2023 Accur8, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout;
