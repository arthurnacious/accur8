import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const AppLayout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default AppLayout;
