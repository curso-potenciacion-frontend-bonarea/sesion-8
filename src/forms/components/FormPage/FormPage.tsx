import { PropsWithChildren } from "react";
import "./FormPage.scss";

const FormPage = ({ children }: PropsWithChildren): React.ReactElement => {
  return <div className="form-page">{children}</div>;
};

export default FormPage;
