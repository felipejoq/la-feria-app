import {Header} from "../../components/commons/header/Header.jsx";
import {Jumbotron} from "../../components/commons/jumbotron/Jumbotron.jsx";
import {Button, Form} from "react-bootstrap";

export const RegisterPage = () => {

  return (
    <>
      <Jumbotron/>
      <div className='container d-flex justify-content-center'>
        <article className='special-card bg-secondary-color text-center col-12 col-sm-12 col-lg-4 p-4'>
          <h2 className='text-primary-color text-uppercase mb-4'>Crear una cuenta</h2>
          <Form className='d-flex flex-column gap-3'>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control className='input-text-general' type="text" placeholder="Ingrese su nombre..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control className='input-text-general' type="email" placeholder="Correo electrónico..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Control className='input-text-general' type="text" placeholder="Escriba su contraseña..." autoComplete='off'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Control className='input-text-general' type="text" placeholder="Nuevamente su contraseña..." autoComplete='off'/>
            </Form.Group>
            <Button variant="primary" type="submit" className='btn-generic text-uppercase'>
              Registrarse
            </Button>
          </Form>
        </article>
      </div>
    </>
  )
}
