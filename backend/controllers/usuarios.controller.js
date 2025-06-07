const db = require('../db/connection');

// GET /api/usuarios
exports.obtenerUsuarios = async (req, res) => {
  try {
    const [usuarios] = await db.query('SELECT * FROM usuarios');
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuarios', error });
  }
};

// POST /api/usuarios
exports.crearUsuario = async (req, res) => {
  const { nombre, documento_identidad, direccion, telefono } = req.body;
  try {
    await db.query(
      'INSERT INTO usuarios (nombre, documento_identidad, direccion, telefono) VALUES (?, ?, ?, ?)',
      [nombre, documento_identidad, direccion, telefono]
    );
    res.status(201).json({ mensaje: 'Usuario creado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear usuario', error });
  }
};
