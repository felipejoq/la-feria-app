import {useEffect, useState} from "react";
import {AuthService} from "../services/auth.service.js";

export const useLogin = ({login}) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const user = await AuthService.login(login);
      if(user) setUser(user);
    })();
  }, [login]);

  return {
    user,
  }
}