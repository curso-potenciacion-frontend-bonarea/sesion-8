import { Outlet } from "react-router-dom";
import "./CleanLayout.scss";

const CleanLayout = (): React.ReactElement => {
  return (
    <div className="centered-block">
      <div className="centered-block__content">
        <Outlet />
      </div>
    </div>
  );
};

export default CleanLayout;
