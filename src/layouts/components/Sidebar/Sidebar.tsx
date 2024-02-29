import { PropsWithChildren } from "react";
import "./Sidebar.scss";

const Sidebar = ({ children }: PropsWithChildren): React.ReactElement => {
  return <aside className="main-sidebar">{children}</aside>;
};

export default Sidebar;
