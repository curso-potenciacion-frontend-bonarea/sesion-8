import { InputFieldProps } from "../types";
import "./InputField.scss";

const InputField = ({
  id,
  labelText,
  ...props
}: InputFieldProps): React.ReactElement => {
  return (
    <>
      <label htmlFor={id} className="form__label">
        {labelText}
      </label>
      <input id={id} className="form__control" {...props} />
    </>
  );
};

export default InputField;
