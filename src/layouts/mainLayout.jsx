import { useLoaderData, Outlet } from "react-router-dom";
import { fetchData } from "../utils/helper";

import NavBar from "../components/navbar";

export function MainLoader() {
  const username = fetchData("userName");
  return { username };
}

export default function Main() {
  const { username } = useLoaderData();

  return (
    <div className="main-layout">
      <NavBar userName={username} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
