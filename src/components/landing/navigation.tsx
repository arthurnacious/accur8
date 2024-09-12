import Link from "next/link";
import React, { FC } from "react";
import { Button, buttonVariants } from "@/components/ui/button";

interface Props {}

const Navigation: FC<Props> = () => {
  return (
    <nav className="flex items-center justify-between gap-6 py-6 px-4 sm:px-6">
      <ul className="flex items-center justify-center gap-6 text-sm font-medium text-gray-500">
        <li className="hover:text-gray-900 transition-colors">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-900 transition-colors">
          <Link href="/">Features</Link>
        </li>
        <li className="hover:text-gray-900 transition-colors">
          <Link href="/">Pricing</Link>
        </li>
        <li className="hover:text-gray-900 transition-colors">
          <Link href="/">Contact</Link>
        </li>
      </ul>
      <Link href="/dashboard" className={buttonVariants()}>
        Sign up for free
      </Link>
    </nav>
  );
};

export default Navigation;
