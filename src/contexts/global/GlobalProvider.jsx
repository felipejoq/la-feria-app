import {GlobalContext} from "./GlobalContext.js";
import {useEffect, useState} from "react";

export const GlobalProvider = ({children}) => {

  const [logged, setLogged] = useState(Boolean(JSON.parse(localStorage.getItem('user'))) || false);

  const [user, setUser] = useState({});

  useEffect(() => {
    if (logged) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [logged]);

  return (
    <GlobalContext.Provider value={{
      logged,
      setLogged,
      user
    }}>
      {children}
    </GlobalContext.Provider>
  );
};