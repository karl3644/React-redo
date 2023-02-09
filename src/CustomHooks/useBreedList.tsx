import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      // use promise to simulate delay using setTimeout. setTimeout does not work with async await
      // const promise = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`));
      //   }, 3000);
      // });
      // promise
      //   .then((res) => res.json())
      //   .then((res) => (localCache[animal] = res.breeds || []))
      //   .then((res) => setBreedList(localCache[animal]))
      //   .then((res) => setStatus("loaded"))
      //   .catch((err) => console.log(err));
      // use promise to simulate delay using setTimeout. setTimeout does not work with async await

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
