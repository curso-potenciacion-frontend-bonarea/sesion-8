import { NavBarLink } from "@/routing/types";
import { Link } from "react-router-dom";
import "./NavBar.scss";

interface NavBarProps {
  links: NavBarLink[];
}

const NavBar = ({ links }: NavBarProps): React.ReactElement => {
  return (
    <nav className="navbar">
      <ul>
        {links.map(({ text, url }) => (
          <li key={url}>
            <Link to={url}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
