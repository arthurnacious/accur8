import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/auth-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/95" />
      <div className="z-10 max-w-md w-full space-y-8 p-10 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
