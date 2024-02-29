import { useNavigate } from "react-router-dom";
import Form from "@/forms/components/Form";
import FormGroup from "@/forms/components/FormGroup";
import {
  TextField,
  PasswordField,
  CheckBoxField,
} from "@/forms/components/InputField";
import Button from "@/shared/components/Button";

const LoginForm = (): React.ReactElement => {
  const labelElement = <>Remember me</>;
  const navigate = useNavigate();

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/menu");
  };

  return (
    <>
      <p>Please enter your credentials</p>
      <Form onSubmit={login}>
        <FormGroup>
          <TextField id="username" labelText="Your username" />
        </FormGroup>
        <FormGroup>
          <PasswordField id="password" labelText="Your password" />
        </FormGroup>
        <FormGroup variant="inline">
          <CheckBoxField id="privacy" labelText={labelElement} />
        </FormGroup>
        <FormGroup>
          <Button variant="outline">Log in</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default LoginForm;
