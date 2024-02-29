import { Outlet } from "react-router-dom";
import Heading from "@/shared/components/Heading";
import Header from "@/layouts/components/Header";
import MainContent from "@/layouts/components/MainContent";
import Sidebar from "@/layouts/components/Sidebar";
import logo from "@/assets/logoA.svg";
import Image from "@/shared/components/Image";
import NavBar from "@/shared/components/NavBar/NavBar";
import { NavBarLink } from "@/routing/types";
import { authFullPaths } from "@/auth/routing/paths";
import { shopsFullPaths } from "@/shops/routing/paths";
import { trucksFullPaths } from "@/trucks/routing/paths";
import "./MainLayout.scss";
import EmployeesCount from "@/shared/components/EmployeesCount/EmployeesCount";

const mainNavigationLinks: NavBarLink[] = [
  {
    text: "Main menu",
    url: "/menu",
  },
  {
    text: "Trucks",
    url: trucksFullPaths.list,
  },
  {
    text: "Shops",
    url: shopsFullPaths.list,
  },
  {
    text: "Login",
    url: authFullPaths.login,
  },
];

const MainLayout = (): React.ReactElement => {
  return (
    <div className="container">
      <Header>
        <Image
          width="31"
          height="34"
          src={logo}
          alt="Stolen logo from bonÀrea"
        />
        <Heading>bonMario App</Heading>
      </Header>
      <Sidebar>
        <NavBar links={mainNavigationLinks} />
        <EmployeesCount />
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
};

export default MainLayout;
