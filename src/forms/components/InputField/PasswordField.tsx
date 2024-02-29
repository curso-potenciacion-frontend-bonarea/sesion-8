import { InputFieldProps } from "../types";
import InputField from "./InputField";

const PasswordField = ({
  id,
  labelText,
  ...props
}: InputFieldProps): React.ReactElement => {
  return (
    <InputField type="password" id={id} labelText={labelText} {...props} />
  );
};

export default PasswordField;
