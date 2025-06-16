import { Table, Button } from 'react-bootstrap';

function Productos() {
  return (
    <div className="container">
      <h2>Gestión de Productos</h2>
      <Button variant="primary" className="mb-3">+ Añadir Producto</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Producto A</td>
            <td>S/ 45.00</td>
            <td>30</td>
            <td>
              <Button variant="warning" size="sm" className="me-2">Editar</Button>
              <Button variant="danger" size="sm">Eliminar</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Productos;
