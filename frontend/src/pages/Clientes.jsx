import { Button, Table } from 'react-bootstrap';

function Clientes() {
  return (
    <div className="container">
      <h2>Gestión de Clientes</h2>
      <Button variant="primary" className="mb-3">Registrar Cliente</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Juan Pérez</td>
            <td>juan@mail.com</td>
            <td>987654321</td>
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

export default Clientes;
