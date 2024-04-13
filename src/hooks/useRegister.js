import {useContext, useState} from "react";
import {AuthService} from "../services/auth.service.js";
import {GlobalContext} from "../contexts/global/GlobalContext.js";
import {useLocalStorage} from "./useLocalStorage.js";
import {useNavigate} from "react-router-dom";

export const useRegister = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({status: false, message: ''});
  const [register, setRegister] = useState({name: '', email: '', password: ''});
  const [validated, setValidated] = useState(false);
  const {setLogged} = useContext(GlobalContext);
  const {setDataLocalStorage} = useLocalStorage();

  const handleRegister = ({target}) => {
    const {name, value} = target;
    setRegister(( prevState ) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      setLoading(true);
      AuthService.register(register)
        .then(({data}) => {
          setLogged(true);
          setDataLocalStorage({key: 'user', data});
          navigation('/');
        })
        .catch((error) => {
          console.log(error)
          setFeedback({status: true, message: error.response.data.error});
        })
        .finally(() => {
          setLoading(false);
        });
      return;
    }
    setValidated(true);
  }

  return {
    setRegister,
    loading,
    feedback,
    register,
    validated,
    handleRegister,
    handleSubmit
  };
}