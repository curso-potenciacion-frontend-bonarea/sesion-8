import { Link } from "react-router-dom";
import RegisterForm from "@/auth/components/RegisterForm";
import { authFullPaths } from "@/auth/routing/paths";
import Heading from "@/shared/components/Heading";
import FormPage from "@/forms/components/FormPage";

const RegisterPage = (): React.ReactElement => {
  return (
    <FormPage>
      <Heading level={2}>Register</Heading>
      <RegisterForm />
      <Link to={authFullPaths.login}>Go to login</Link>
    </FormPage>
  );
};

export default RegisterPage;
