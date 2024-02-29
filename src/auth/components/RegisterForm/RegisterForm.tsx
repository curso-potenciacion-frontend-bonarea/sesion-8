import Form from "@/forms/components/Form";
import FormGroup from "@/forms/components/FormGroup";
import {
  CheckBoxField,
  PasswordField,
  TextField,
} from "@/forms/components/InputField";
import Button from "@/shared/components/Button";

const RegisterForm = (): React.ReactElement => {
  const labelElement = (
    <>
      I accept the <a href="">Privacy Policy</a>
    </>
  );

  return (
    <>
      <p>Please enter your data</p>
      <Form>
        <FormGroup>
          <TextField id="name" labelText="Your name" />
        </FormGroup>
        <FormGroup>
          <TextField id="username" labelText="Your username" />
        </FormGroup>
        <FormGroup>
          <PasswordField id="password" labelText="Your password" />
        </FormGroup>
        <FormGroup>
          <PasswordField
            id="repeat-password"
            labelText="Confirm your password"
          />
        </FormGroup>
        <FormGroup variant="inline">
          <CheckBoxField id="privacy" labelText={labelElement} />
        </FormGroup>
        <FormGroup>
          <Button variant="outline">Sign up</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default RegisterForm;
