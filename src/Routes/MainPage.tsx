import { Outlet } from "react-router-dom";
import TopNavigation from "../Components/TopNavigation";

export default function MainPage() {
  return (
    <>
      <div>MainPage</div>
      <TopNavigation />
      <Outlet />
      <p>Footer</p>
    </>
  );
}
