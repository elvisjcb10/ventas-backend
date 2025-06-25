// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Ventas from './pages/Ventas';
import Productos from './pages/Productos';
import Clientes from './pages/Clientes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Login /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/productos" element={<Layout><Productos /></Layout>} />
        <Route path="/clientes" element={<Layout><Clientes /></Layout>} />
        <Route path="/ventas" element={<Layout><Ventas /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
