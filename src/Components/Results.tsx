import Pet from "./Pet";

export default function Results({ pets, status }) {
  return (
    <div>
      {status === "loading" || !pets.length ? (
        <h3>No Pets found</h3>
      ) : (
        pets.map((pet) => <Pet key={pet.id} pet={pet} id={pet.id} />)
      )}
    </div>
  );
}
