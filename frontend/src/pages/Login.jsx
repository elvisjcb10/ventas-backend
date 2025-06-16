import { Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su usuario" />
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>

        <Button variant="primary" type="submit">Ingresar</Button>
      </Form>
    </div>
  );
}

export default Login;
