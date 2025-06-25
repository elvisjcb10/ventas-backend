const clienteModel = require('../models/cliente.model');

// GET /api/clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await clienteModel.obtenerClientes();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener clientes', error });
  }
};

// GET /api/clientes/:id
exports.obtenerClientePorId = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await clienteModel.obtenerClientePorId(id);
    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener cliente', error });
  }
};

// POST /api/clientes
exports.crearCliente = async (req, res) => {
  try {
    await clienteModel.crearCliente(req.body);
    res.status(201).json({ mensaje: 'Cliente creado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear cliente', error });
  }
};

// PUT /api/clientes/:id
exports.actualizarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await clienteModel.actualizarCliente(id, req.body);
    if (resultado === 0) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json({ mensaje: 'Cliente actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar cliente', error });
  }
};

// DELETE /api/clientes/:id
exports.eliminarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await clienteModel.eliminarCliente(id);
    if (resultado === 0) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json({ mensaje: 'Cliente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar cliente', error });
  }
};
