import { useState } from "react";

export default function FakeShop() {
  const apiURL = "https://fakestoreapi.com/products/";

  // standard fetch
  // let res;
  // function standardFetch(url) {
  //   fetch(url)
  //     // parse to json
  //     .then((res) => res.json())
  //     // success
  //     .then((data) => ((res = data), console.log(data)))
  //     // fail - catch the error
  //     .catch((error) => console.error(error));
  // }
  // standardFetch(apiURL);

  // or async await fetch
  async function asyncAwaitFetch(url) {
    const itemData = await fetch(url);
    const body = await itemData.json();
    return body;
  }
  // const returnedValue = await asyncAwaitFetch(apiURL);

  return (
    <>
      <h2>FakeShop</h2>
      {/* <p>{state ? state : "nothing"}</p> */}
    </>
  );
}
