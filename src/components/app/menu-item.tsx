"use client";
import React, { FC, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Props {
  item: {
    title: string;
    icon: ReactNode;
    children?: {
      title: string;
      link: string;
    }[];
  };
  isActive: boolean;
  onClick: () => void;
}

const MenuItem: FC<Props> = ({ item, isActive, onClick }) => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="mb-2">
      <button
        onClick={onClick}
        className="flex items-center w-full p-2 text-left text-gray-500 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none duration-300"
      >
        <span className="mr-2">{item.icon}</span>

        <span>{item.title}</span>
        {item.children && item.children.length > 0 && (
          <span className="ml-auto">
            {isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        )}
      </button>
      <AnimatePresence>
        {isActive && item.children && item.children.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="ml-6 mt-2 border-l-2 border-gray-600"
          >
            {item.children.map((child, index) => (
              <Link
                key={index}
                href={child.link}
                className="relative flex items-center p-2 pl-4 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded-md"
              >
                <span className="absolute -left-[4px] size-[0.4rem] bg-gray-600 rounded-full mr-2" />
                {child.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuItem;
