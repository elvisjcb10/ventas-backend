const db = require('../db/connection');

// Obtener todos los clientes
const obtenerClientes = async () => {
  const [rows] = await db.query('SELECT * FROM clientes');
  return rows;
};

// Obtener un cliente por ID
const obtenerClientePorId = async (id) => {
  const [rows] = await db.query('SELECT * FROM clientes WHERE id = ?', [id]);
  return rows[0];
};

// Crear un nuevo cliente
const crearCliente = async ({ nombre, documento_identidad, direccion, telefono }) => {
  await db.query(
    'INSERT INTO clientes (nombre, documento_identidad, direccion, telefono) VALUES (?, ?, ?, ?)',
    [nombre, documento_identidad, direccion, telefono]
  );
};

// Actualizar cliente
const actualizarCliente = async (id, { nombre, documento_identidad, direccion, telefono }) => {
  const [resultado] = await db.query(
    'UPDATE clientes SET nombre = ?, documento_identidad = ?, direccion = ?, telefono = ? WHERE id = ?',
    [nombre, documento_identidad, direccion, telefono, id]
  );
  return resultado.affectedRows;
};

// Eliminar cliente
const eliminarCliente = async (id) => {
  const [resultado] = await db.query('DELETE FROM clientes WHERE id = ?', [id]);
  return resultado.affectedRows;
};

module.exports = {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};
