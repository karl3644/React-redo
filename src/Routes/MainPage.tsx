import { Outlet, Link } from "react-router-dom";
import TopNavigation from "../Components/TopNavigation";
import { useState } from "react";
import { PetContext } from "../Components/PetContext";

export default function MainPage() {
  const [pets, setPets] = useState([]);
  const value = { pets, setPets };

  return (
    <>
      <div>MainPage</div>
      <Link to={"/"}>Log out</Link>
      <TopNavigation />
      <PetContext.Provider value={value}>
        <Outlet />
      </PetContext.Provider>
      <p>Footer</p>
    </>
  );
}
