import Pet from "./Pet";

export default function Results({ pets, status }) {
  console.log("pets", pets);

  return (
    <div>
      {status === "loading" || !pets.length ? (
        <h3>No Pets found</h3>
      ) : (
        pets.map((pet) => <Pet pet={pet} id={pet.id} />)
      )}
    </div>
  );
}
