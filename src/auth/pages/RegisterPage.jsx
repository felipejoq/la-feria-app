import {Jumbotron} from "../../components/commons/jumbotron/Jumbotron.jsx";
import {Alert, Button, Form} from "react-bootstrap";
import {useRegister} from "../../hooks/useRegister.js";
import {Link} from "react-router-dom";


export const RegisterPage = () => {

  const {
    loading,
    feedback,
    register,
    validated,
    handleRegister,
    handleSubmit
  } = useRegister();

  return (
    <>
      <Jumbotron/>
      <div className='container d-flex justify-content-center'>
        <article className='special-card bg-secondary-color text-center col-12 col-sm-12 col-lg-4 p-4'>
          <h2 className='text-primary-color text-uppercase mb-4'>Crear una cuenta</h2>
          {loading && <Alert variant='info'>Cargando...</Alert>}
          {feedback.status && <Alert variant='warning'>{feedback.message} - <Link to='/auth/login'>Iniciar sesión</Link></Alert>}
          <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                value={register.name}
                onChange={handleRegister}
                className='input-text-general'
                name="name"
                type="text"
                placeholder="Ingrese su nombre..."
                required
              />
              <Form.Control.Feedback type="invalid">
                Este campo no puede estar vacío
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                value={register.email}
                onChange={handleRegister}
                className='input-text-general'
                name="email"
                type="email"
                placeholder="Correo electrónico..."
                required
              />
              <Form.Control.Feedback type="invalid">
                Este campo no puede estar vacío
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Control
                value={register.password}
                onChange={handleRegister}
                className='input-text-general'
                name="password" type="password"
                placeholder="Escriba su contraseña..."
                autoComplete='off'
                required
              />
              <Form.Control.Feedback type="invalid">
                Este campo no puede estar vacío
              </Form.Control.Feedback>
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
