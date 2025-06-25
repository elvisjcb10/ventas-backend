import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';

import {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto
} from '../services/productoService';   // ← sin punto final

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: ''
  });
  const [editando, setEditando] = useState(false);
  const [productoId, setProductoId] = useState(null);

  /* ───────── Cargar lista ───────── */
  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = () => {
    getProductos().then(res => setProductos(res.data));
  };

  /* ───────── Handlers de formulario ───────── */
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editando) {
      updateProducto(productoId, formData).then(() => {
        cargarProductos();
        resetForm();
      });
    } else {
      createProducto(formData).then(() => {
        cargarProductos();
        resetForm();
      });
    }
  };

  const handleEdit = p => {
    setFormData({
      nombre: p.nombre,
      precio: p.precio,
      stock: p.stock
    });
    setEditando(true);
    setProductoId(p.id);
  };

  const handleDelete = id => {
    deleteProducto(id).then(() => cargarProductos());
  };

  const resetForm = () => {
    setFormData({ nombre: '', precio: '', stock: '' });
    setEditando(false);
    setProductoId(null);
  };

  /* ───────── UI ───────── */
  return (
    <div className="container mt-4">
      <h2>Gestión de Productos</h2>

      {/* Formulario */}
      <Form onSubmit={handleSubmit} className="mb-4">
        <Row className="g-3 align-items-end">
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              step="0.01"
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={2}>
            <Button type="submit" variant="primary" className="w-100">
              {editando ? 'Actualizar' : 'Agregar'}
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Tabla */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio (S/)</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{Number(p.precio).toFixed(2)}</td>
              <td>{p.stock}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(p)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(p.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Productos;
