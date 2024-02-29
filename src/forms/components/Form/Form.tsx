import { PropsWithChildren } from "react";
import "./Form.scss";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  variant?: "inline" | "vertical";
}

const Form = ({
  variant = "vertical",
  children,
  ...props
}: PropsWithChildren<FormProps>): React.ReactElement => {
  return (
    <form className={`form form--${variant}`} {...props}>
      {children}
    </form>
  );
};

export default Form;
