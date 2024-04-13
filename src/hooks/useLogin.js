import {useContext, useEffect, useState} from "react";
import {AuthService} from "../services/auth.service.js";
import {useLocalStorage} from "./useLocalStorage.js";
import {GlobalContext} from "../contexts/global/GlobalContext.js";

export const useLogin = () => {
  const [login, setLogin] = useState(null);
  const {setLogged} = useContext(GlobalContext);
  const [user, setUser] = useState(null);
  const {setDataLocalStorage} = useLocalStorage();
  const [feedback, setFeedback] = useState({ status: false, message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!login) return;
    (async () => {
      setLoading(true);
      setFeedback({ ...feedback, status: false });
      AuthService.login(login)
        .then(({data: user}) => {
          setUser(user)
          setLogged(true);
          setDataLocalStorage({key: 'user', data: user});
          setLoading(false);
          setFeedback({ ...feedback, status: false });
        })
        .catch((error) => {
          setFeedback({ status: true, message: error.response.data.error });
          setLoading(false);
        });
    })();
  }, [login]);

  const setUserLogin = ({login}) => {
    setLogin(login);
  }

  return {
    setUserLogin,
    loading,
    feedback,
    user,
  }
}