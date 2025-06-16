const db = require('../db/connection');

// GET /api/clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const [clientes] = await db.query('SELECT * FROM clientes');
    res.json(clientes); // Responde con lista de clientes
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener clientes', error });
  }
};

// POST /api/clientes
exports.crearCliente = async (req, res) => {
  const { nombre, email,password } = req.body;
  try {
    await db.query(
      'INSERT INTO clientes (nombre, email, password) VALUES (?, ?,?)',
      [nombre, email , password]
    );
    res.status(201).json({ mensaje: 'Cliente creado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear cliente', error });
  }
};
