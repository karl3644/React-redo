import { useState, useEffect } from "react";
import useBreedList from "../CustomHooks/useBreedList";

export default function PetAdopt() {
  const [location, setLocation] = useState("");
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [breedList, status] = useBreedList(selectedAnimal);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [pets, setPets] = useState([]);

  // or async await fetch
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${selectedAnimal}&location=${location}&breed=${selectedBreed}`
    );
    const json = await res.json();
    setPets(json.pets);
    console.log(json.pets);
  }

  return (
    <>
      {status}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <h2>PetAdopt</h2>
        <label htmlFor="location">Location</label>
        <input
          name="location"
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="selectedAnimal">Animal</label>
        <select
          name="selectedAnimal"
          id="selectedAnimal"
          value={selectedAnimal}
          onChange={(e) => {
            setSelectedAnimal(e.target.value);
            setSelectedBreed("");
          }}
        >
          <option value={""} />
          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
        <label htmlFor="selectedBreed">Breed</label>
        <select
          name="selectedBreed"
          id="selectedBreed"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          disabled={!breedList.length}
        >
          <option value={""} />
          {breedList.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
      <div id="petListContainer">
        <h2>Pet List</h2>
        <ul id="petList">
          {/*  Results component takes in pet list as props */}
          {/* if no pets show loading */}
          {/* pet list mapped out */}
          {/* each pet is component which takes object and id. is used for useParams */}
          {/* create top level route <Route path="/page/:id" element={<Component />} /> */}
          {/* link to id on each pet mapped out */}

          {pets.map((pet) => (
            <li key={pet.id}>
              {pet.name} - {pet.breed} - {`${pet.city}, ${pet.state}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
