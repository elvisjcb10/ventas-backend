const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Obtener todos los usuarios
router.get('/', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json(results[0]);
  });
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
  const { nombre, email, password } = req.body;
  db.query('INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)', 
    [nombre, email, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, nombre, email });
  });
});

// Actualizar usuario
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;
  db.query('UPDATE usuarios SET nombre=?, email=?, password=? WHERE id=?', 
    [nombre, email, password, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Usuario actualizado' });
  });
});

// Eliminar usuario
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios WHERE id=?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Usuario eliminado' });
  });
});

module.exports = router;
