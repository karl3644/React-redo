export default function Pet({ pet }) {
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
    <>
      <h3>{pet.name}</h3>
      <p>
        {pet.breed} - {pet.city} - {pet.state}
      </p>
      <img src={img} alt="img" />
    </>
  );
}
