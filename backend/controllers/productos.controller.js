const db = require('../db/connection');

// GET /api/productos
exports.obtenerProductos = async (req, res) => {
  try {
    const [productos] = await db.query('SELECT * FROM productos');
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productos', error });
  }
};

// POST /api/productos
exports.crearProducto = async (req, res) => {
  const { nombre, precio, stock } = req.body;
  try {
    await db.query(
      'INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)',
      [nombre, precio, stock]
    );
    res.status(201).json({ mensaje: 'Producto creado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear producto', error });
  }
};
