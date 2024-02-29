type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface InputFieldProps extends InputProps {
  id: InputProps["id"];
  labelText: string | React.ReactElement;
}
