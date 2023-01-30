import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <p>Page not found </p>
      {/* <i>{error.statusText || error.message}</i> */}
      {error.statusText ? (
        <i>error.statusText: {error.statusText}</i>
      ) : error.message ? (
        <i>error.message: {error.message}</i>
      ) : (
        <i>No error</i>
      )}
    </div>
  );
}
