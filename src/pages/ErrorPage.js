import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <main>
        <h1>Whoopsie Daisy! Invalid URL</h1>
      </main>
    </>
  );
}

export default ErrorPage;