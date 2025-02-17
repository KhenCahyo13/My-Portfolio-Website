import { FC, Fragment, memo } from "react";
import { LogoProps } from "./Logo.types";

const LogoView: FC<LogoProps> = ({ children }) => (
    <Fragment>{children}</Fragment>
);

export default memo(LogoView);
