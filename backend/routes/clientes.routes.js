const express = require('express');
const router = express.Router();
const clienteCtrl = require('../controllers/clientes.controller.js');

// Ejemplo de estructura usando callbacks
router.get('/', (req, res) => {
  clienteCtrl.obtenerClientes((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

router.post('/', (req, res) => {
  clienteCtrl.crearCliente(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Cliente creado', result });
  });
});

router.put('/:id', (req, res) => {
  clienteCtrl.actualizarCliente(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Cliente actualizado', result });
  });
});

router.delete('/:id', (req, res) => {
  clienteCtrl.eliminarCliente(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Cliente eliminado', result });
  });
});

module.exports = router;
