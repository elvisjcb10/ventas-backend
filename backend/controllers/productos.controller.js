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

// GET /api/productos/:id
exports.obtenerProductoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const [resultado] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
    if (resultado.length === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(resultado[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el producto', error });
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

// PUT /api/productos/:id
exports.actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock } = req.body;
  try {
    const [resultado] = await db.query(
      'UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?',
      [nombre, precio, stock, id]
    );
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json({ mensaje: 'Producto actualizado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar producto', error });
  }
};

// DELETE /api/productos/:id
exports.eliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const [resultado] = await db.query('DELETE FROM productos WHERE id = ?', [id]);
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar producto', error });
  }
};

