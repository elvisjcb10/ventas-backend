const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientes.controller.js');
router.get('/', clientesController.obtenerClientes);
router.post('/', clientesController.crearCliente);
module.exports = router;
