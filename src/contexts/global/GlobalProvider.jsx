import {GlobalContext} from "./GlobalContext.js";
import {useState} from "react";

export const GlobalProvider = ({children}) => {

  const [logged, setLogged] = useState(Boolean(JSON.parse(localStorage.getItem('user'))) || false);

  return (
    <GlobalContext.Provider value={{
      logged,
      setLogged,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};