import React, { FC } from "react";

interface Props {}

const Logo: FC<Props> = () => {
  return (
    <h1 className="text-center text-5xl font-extrabold text-gray-800 font-sans tracking-tight">
      Accur<span className="text-blue-500">8</span>
    </h1>
  );
};

export default Logo;
