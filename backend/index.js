const express = require('express');
const cors = require('cors');
const app = express();
const productosRoutes = require('./routes/productos.routes');
const clientesRoutes = require('./routes/clientes.routes');
const usuariosRoutes = require('./routes/usuarios.routes');


app.use(cors());
app.use(express.json());
app.use('/api/productos', productosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/usuarios', usuariosRoutes);

app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001');
});
