import { InputFieldProps } from "../types";
import InputField from "./InputField";

const TextField = ({
  id,
  labelText,
  ...props
}: InputFieldProps): React.ReactElement => {
  return <InputField type="text" id={id} labelText={labelText} {...props} />;
};

export default TextField;
