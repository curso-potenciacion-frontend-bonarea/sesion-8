import { Link } from "react-router-dom";
import LoginForm from "@/auth/components/LoginForm";
import { authFullPaths } from "@/auth/routing/paths";
import Heading from "@/shared/components/Heading";
import FormPage from "@/forms/components/FormPage";

const LoginPage = (): React.ReactElement => {
  return (
    <FormPage>
      <Heading level={2}>Login</Heading>
      <LoginForm />
      <Link to={authFullPaths.register}>Go to register</Link>
    </FormPage>
  );
};

export default LoginPage;
