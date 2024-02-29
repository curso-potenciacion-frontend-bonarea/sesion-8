import { PropsWithChildren } from "react";
import "./FormGroup.scss";

interface FormGroupProps {
  variant?: "inline" | "vertical";
}

const FormGroup = ({
  variant = "vertical",
  children,
}: PropsWithChildren<FormGroupProps>): React.ReactElement => {
  return (
    <div className={`form__group form__group--${variant}`}>{children}</div>
  );
};

export default FormGroup;
