import { createContext } from "react";

const myContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export default myContext;
