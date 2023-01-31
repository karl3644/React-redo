import { Outlet } from "react-router-dom";
import TopNavigation from "../Components/TopNavigation";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div>MainPage</div>
      <Link to={"/"}>Log out</Link>
      <TopNavigation />
      <Outlet />
      <p>Footer</p>
    </>
  );
}
