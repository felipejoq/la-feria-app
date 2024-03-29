import {Jumbotron} from "../../components/commons/jumbotron/Jumbotron.jsx";
import {Alert, Button, Form} from "react-bootstrap";
import {useContext, useState} from "react";
import {GlobalContext} from "../../contexts/global/GlobalContext.js";
import {AuthService} from "../../services/auth.service.js";
import {useLocalStorage} from "../../hooks/useLocalStorage.js";

export const LoginPage = () => {

  const [isBadLogin, setIsBadLogin] = useState(false);
  const [login, setLogin] = useState({email: 'felipe@test.', password: '123123'});
  const [validated, setValidated] = useState(false);

  const {setLogged} = useContext(GlobalContext);

  const {setDataLocalStorage} = useLocalStorage();

  const handleLogin = ({target}) => {
    const {name, value} = target;
    setLogin({
      ...login,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      setIsBadLogin(false);
      AuthService.login(login)
        .then(user => {
          setLogged(true);
          setDataLocalStorage({key: 'user', data: user})
        })
      return;
    }
    setValidated(true);
  }

  return (
    <>
      <Jumbotron/>
      <div className='container d-flex justify-content-center flex-column align-items-center'>
        <article className='special-card bg-secondary-color text-center col-12 col-sm-12 col-lg-4 p-4'>
          <h2 className='text-primary-color text-uppercase mb-4'>Iniciar Sesión</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
            {isBadLogin && <Alert variant='warning'>Usuario o contraseña incorrecto</Alert>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                value={login.email}
                className='input-text-general'
                name="email"
                type="email"
                placeholder="Correo electrónico..."
                onChange={handleLogin}
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un correo válido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                value={login.password}
                className='input-text-general'
                name="password"
                type="password"
                placeholder="Contraseña..."
                autoComplete='off'
                onChange={handleLogin}
                required
              />
              <Form.Control.Feedback type="invalid">
                Este campo no puede estar vacío
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className='btn-generic text-uppercase'>
              Ingresar
            </Button>
          </Form>
        </article>
      </div>
    </>
  )
}
