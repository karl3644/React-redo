import { useState, useEffect } from "react";

export default function PetAdopt() {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  // const apiURL = "http://pets-v2.dev-apis.com";
  const [breedList, setBreedList] = useState([]);

  // standard fetch
  // let res;
  // function standardFetch(url) {
  //   fetch(url)
  //     // parse to json
  //     .then((res) => res.json())
  //     // success
  //     .then((data) => data)
  //     // fail - catch the error
  //     .catch((error) => console.error(error));
  // }
  // standardFetch(apiURL);

  // or async await fetch
  // async function asyncAwaitFetch(url) {
  //   const itemData = await fetch(url);
  //   const body = await itemData.json();
  //   setItems(body);
  //   // return body;
  // }

  return (
    <>
      <h2>PetAdopt</h2>
      <h3>Animal</h3>
      <select
        value={selectedAnimal}
        onChange={(e) => setSelectedAnimal(e.target.value)}
      >
        <option value={""} />
        {ANIMALS.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>
      <h3>Breed</h3>
      <select
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
    </>
  );
}
