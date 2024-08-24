import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import ObtenerUsuarios from "./pages/users/listusers";
import PostUsers from "./pages/users/postusers";
import UpdateUser from "./pages/users/putusers";
import DeleteUser from "./pages/users/deleteusers";
import SearchUser from "./pages/users/searchusers"; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Listar Usuarios</Link>
          </li>
          <li>
            <Link to="/create">Crear Usuario</Link>
          </li>
          <li>
            <Link to="/update">Actualizar Usuario</Link>
          </li>
          <li>
            <Link to="/delete">Eliminar Usuario</Link>
          </li>
          <li>
            <Link to="/search">Buscar Usuario</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ObtenerUsuarios />} />
        <Route path="/create" element={<PostUsers />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/delete" element={<DeleteUser />} />
        <Route path="/search" element={<SearchUser />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
