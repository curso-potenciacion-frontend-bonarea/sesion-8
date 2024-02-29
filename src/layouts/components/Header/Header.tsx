import { PropsWithChildren } from "react";
import "./Header.scss";

const Header = ({ children }: PropsWithChildren): React.ReactElement => {
  return <header className="main-header">{children}</header>;
};

export default Header;
