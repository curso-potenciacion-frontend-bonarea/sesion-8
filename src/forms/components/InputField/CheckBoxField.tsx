import { InputFieldProps } from "../types";

const CheckBoxField = ({
  id,
  labelText,
}: InputFieldProps): React.ReactElement => {
  return (
    <>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{labelText}</label>
    </>
  );
};

export default CheckBoxField;
