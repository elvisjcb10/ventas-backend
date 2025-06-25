// frontend/src/pages/Ventas.jsx
import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

import { getUsuarios } from '../services/usuarioService';
import { getProductos } from '../services/productoService';

const Ventas = () => {
  /* ── state ───────────────────────────────────────────── */
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);

  const [ventaItem, setVentaItem] = useState({
    usuarioId: '',
    productoId: '',
    cantidad: 1
  });

  const [carrito, setCarrito] = useState([]);

  /* ── carga inicial ───────────────────────────────────── */
  useEffect(() => {
    getUsuarios().then(res => setUsuarios(res.data));
    getProductos().then(res => setProductos(res.data));
  }, []);

  /* ── handlers ────────────────────────────────────────── */
  const handleChange = e => {
    setVentaItem({ ...ventaItem, [e.target.name]: e.target.value });
  };

  const handleAddToCarrito = e => {
    e.preventDefault();
    const producto = productos.find(p => p.id === Number(ventaItem.productoId));
    const usuario = usuarios.find(u => u.id === Number(ventaItem.usuarioId));
    if (!usuario || !producto) return;

    setCarrito([
      ...carrito,
      {
        ...ventaItem,
        usuarioNombre: usuario.nombre,
        productoNombre: producto.nombre,
        precioUnit: producto.precio
      }
    ]);
    // reinicia selección de producto, deja mismo cliente si quieres
    setVentaItem({ ...ventaItem, productoId: '', cantidad: 1 });
  };

  const totalVenta = carrito.reduce(
    (acc, item) => acc + item.precioUnit * item.cantidad,
    0
  );

  const handleConfirmar = () => {
    /* Enviar “carrito” al backend, por ejemplo:
       axios.post('/api/ventas', { items: carrito })
    */
    alert('Venta confirmada (simulado)');
    setCarrito([]);
  };

  /* ── UI ──────────────────────────────────────────────── */
  return (
    <div className="container mt-4">
      <h2>Registro de Ventas</h2>

      {/* Formulario para añadir líneas al carrito */}
      <Form onSubmit={handleAddToCarrito} className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Cliente</Form.Label>
          <Form.Select
            name="usuarioId"
            value={ventaItem.usuarioId}
            onChange={handleChange}
            required
          >
            <option value="">-- Seleccionar --</option>
            {usuarios.map(u => (
              <option key={u.id} value={u.id}>
                {u.nombre}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Producto</Form.Label>
          <Form.Select
            name="productoId"
            value={ventaItem.productoId}
            onChange={handleChange}
            required
          >
            <option value="">-- Seleccionar --</option>
            {productos.map(p => (
              <option key={p.id} value={p.id}>
                {p.nombre} (S/ {Number(p.precio).toFixed(2)})
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="number"
            name="cantidad"
            min="1"
            value={ventaItem.cantidad}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Agregar al Carrito
        </Button>
      </Form>

      {/* Tabla del carrito */}
      <h4>Carrito</h4>
      {carrito.length === 0 ? (
        <p>Aún no hay productos.</p>
      ) : (
        <>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Cliente</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>P. Unitario</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.usuarioNombre}</td>
                  <td>{item.productoNombre}</td>
                  <td>{item.cantidad}</td>
                  <td>S/ {Number(item.precioUnit).toFixed(2)}</td>
                  <td>S/ {(item.precioUnit * item.cantidad).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h5>Total: S/ {totalVenta.toFixed(2)}</h5>
          <Button variant="primary" onClick={handleConfirmar}>
            Confirmar Venta
          </Button>
        </>
      )}
    </div>
  );
};

export default Ventas;
