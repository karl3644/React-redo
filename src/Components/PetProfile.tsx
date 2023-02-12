import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PetContext } from "./PetContext";

export default function PetProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const pets = useContext(PetContext);
  const pet = pets.pets.filter((item) => item.id.toString() === id)[0];

  return (
    <div>
      <button onClick={() => navigate("/Main/PetAdopt")}>Back to pets</button>
      <h2>PetProfile</h2>
      <h3>{pet.name}</h3>
      <img src={`${pet.images[0]}`} />
      <p>{pet.description}</p>
    </div>
  );
}
2;
