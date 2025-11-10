import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("bob");
  return (
    <UserContext.Provider value=>
      {children}
    </UserContext.Provider>
  );
}