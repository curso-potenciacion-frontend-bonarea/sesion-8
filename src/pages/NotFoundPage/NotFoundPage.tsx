import { Link } from "react-router-dom";

const NotFoundPage = (): React.ReactElement => {
  return (
    <>
      <h2>Page not found</h2>
      <Link to="/">Go to homepage</Link>
    </>
  );
};

export default NotFoundPage;
