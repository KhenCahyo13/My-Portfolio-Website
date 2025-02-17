import { FC, memo } from "react";
import { LogoProps } from "./Logo.types";
import LogoView from "./Logo.view";

const Logo: FC<LogoProps> = ({ children, parenttype }) => {
  if (parenttype !== "Root") {
    throw new Error("Logo must be used within Sidebar.Root");
  }

  return <LogoView children={children} />;
};

export default memo(Logo);
