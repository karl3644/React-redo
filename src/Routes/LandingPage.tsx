import { Link } from "react-router-dom";

export default function LandingPage(props) {
  return (
    <>
      <p>Landing page prop - {props.name}</p>
      <Link to={"Main"}>Login</Link>
    </>
  );
}
