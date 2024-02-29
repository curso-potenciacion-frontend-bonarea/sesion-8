import { PropsWithChildren } from "react";
import "./MainContent.scss";

const MainContent = ({ children }: PropsWithChildren): React.ReactElement => {
  return <main className="main-content">{children}</main>;
};

export default MainContent;
