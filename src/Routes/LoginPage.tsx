import { Link } from "react-router-dom";

export default function LoginPage(props) {
  return (
    <>
      <p>Login page prop - {props.name}</p>
      <Link to={"Main/Landing"}>Login</Link>
    </>
  );
}
