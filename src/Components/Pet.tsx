import { Link } from "react-router-dom";

export default function Pet({ pet, id }) {
  // animal
  // breed
  // city
  // description
  // id
  // images
  // name
  // state
  const [img] = pet.images;

  return (
    <Link to={`${id}`}>
      <div className="pet">
        <h3>{pet.name}</h3>
        <p>
          {pet.breed} - {pet.city} - {pet.state}
        </p>
        <img src={img} alt="img" />
      </div>
    </Link>
  );
}
