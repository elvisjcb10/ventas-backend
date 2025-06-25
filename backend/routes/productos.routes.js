const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller.js');
router.get('/', productosController.obtenerProductos);
router.post('/', productosController.crearProducto);
router.get('/:id', productosController.obtenerProductoPorId);
router.put('/:id', productosController.actualizarProducto);
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;
