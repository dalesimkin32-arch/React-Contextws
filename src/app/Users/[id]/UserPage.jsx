import { useContext } from "react";

import { UserContext } from "./UserContext";

export function UserPage() {
  let { username, setUsername } = useContext(UserContext);
  return (
    <>
      <h2>User ID: {username}</h2>
      <button onClick={() => setUsername("spongebob")}>
        Change username to spongebob
      </button>
    </>
  );
}
