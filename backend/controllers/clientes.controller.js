const db = require('../db/connection');

const obtenerClientes = (callback) => {
  db.query('SELECT * FROM clientes', callback);
};

const obtenerClientePorId = (id, callback) => {
  db.query('SELECT * FROM clientes WHERE id = ?', [id], callback);
};

const crearCliente = (datos, callback) => {
  const { nombre, documento_identidad, direccion, telefono } = datos;
  db.query(
    'INSERT INTO clientes (nombre, documento_identidad, direccion, telefono) VALUES (?, ?, ?, ?)',
    [nombre, documento_identidad, direccion, telefono],
    callback
  );
};

const actualizarCliente = (id, datos, callback) => {
  const { nombre, documento_identidad, direccion, telefono } = datos;
  db.query(
    'UPDATE clientes SET nombre = ?, documento_identidad = ?, direccion = ?, telefono = ? WHERE id = ?',
    [nombre, documento_identidad, direccion, telefono, id],
    callback
  );
};

const eliminarCliente = (id, callback) => {
  db.query('DELETE FROM clientes WHERE id = ?', [id], callback);
};

module.exports = {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};
