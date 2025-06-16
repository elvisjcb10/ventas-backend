import { Button, Form } from 'react-bootstrap';

function Ventas() {
  return (
    <div className="container">
      <h2>Registro de Ventas</h2>

      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Cliente</Form.Label>
          <Form.Select>
            <option>Juan Pérez</option>
            <option>María García</option>
          </Form.Select>
          
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Producto</Form.Label>
          <Form.Select>
            <option>Producto A</option>
            <option>Producto B</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control type="number" defaultValue={1} />
        </Form.Group>

        <Button variant="success">Agregar al Carrito</Button>
      </Form>

      <h4>Carrito</h4>
      <ul>
        <li>Producto A x 2 - S/ 50.00</li>
      </ul>

      <Button variant="primary">Confirmar Venta</Button>
    </div>
  );
}
export default Ventas;
