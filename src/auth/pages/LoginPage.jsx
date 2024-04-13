import {Jumbotron} from "../../components/commons/jumbotron/Jumbotron.jsx";
import {Alert, Button, Form} from "react-bootstrap";
import {useState} from "react";
import {useLogin} from "../../hooks/useLogin.js";

export const LoginPage = () => {

  const {setUserLogin, loading, feedback} = useLogin();
  const [login, setLogin] = useState({email: 'felipe@test.com', password: '123123'});
  const [validated, setValidated] = useState(false);

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
      setUserLogin({login});
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
            { loading && <Alert variant='info'>Cargando...</Alert> }
            { feedback.status && <Alert variant='warning'>{ feedback.message }</Alert> }
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
