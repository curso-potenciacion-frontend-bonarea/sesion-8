import { PropsWithChildren } from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "solid" | "outline";
}

const Button = ({
  variant,
  children,
  ...props
}: PropsWithChildren<ButtonProps>): React.ReactElement => {
  return (
    <button className={`button button--${variant}`} type="submit" {...props}>
      {children}
    </button>
  );
};

export default Button;
