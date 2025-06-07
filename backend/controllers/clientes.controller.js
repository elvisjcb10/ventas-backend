const db = require('../db/connection');
exports.obtenerClientes = async (req, res) => {
try {
const [clientes] = await db.query('SELECT * FROM clientes');
res.json(clientes);
} catch (error) {
res.status(500).json({ mensaje: 'Error al obtener clientes', error });
}
};
exports.crearCliente = async (req, res) => {
const { nombre, direccion } = req.body;
try {
await db.query('INSERT INTO clientes (nombre, direccion) VALUES (?, ?)',
[nombre, direccion]);
res.status(201).json({ mensaje: 'Cliente creado' });
} catch (error) {
res.status(500).json({ mensaje: 'Error al crear cliente', error });
}
};