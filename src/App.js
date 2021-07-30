
import './App.css';
import Ayuda from './Componentes/Ayuda';
import Contacto from './Componentes/Contacto';
import Nosotros from './Componentes/Nosotros';
import Ubicacion from './Componentes/Ubicacion';
import Servicios from './Componentes/Servicios';
import Login from './Componentes/Login';
import Carrusel from './Componentes/Carrusel';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="row justify-content-center minh-100">

        <div className="container mt-3 ">
          <div className="row justify-content-center align-items-center minh-100">
            <div className="btn-group">
              <Link to="/" className="btn btn-warning">
                INICIO
        </Link>
              <Link to="/Login" className="btn btn-dark ">
                LOGIN
        </Link>
              <Link to="/Contacto" className="btn btn-warning">
                CONTACTO
        </Link>
              <Link to="/Ayuda" className="btn btn-dark">
                AYUDA
        </Link>
              <Link to="/Servicios" className="btn btn-warning">
                Servicios
        </Link><Link to="/Nosotros" className="btn btn-dark">
                Nosotros
        </Link><Link to="/Ubicacion" className="btn btn-warning">
                Ubicacion
        </Link>
            </div>
          </div>

        </div>
        <Switch >
          <div className="row justify-content-center align-items-center minh-100">
            <Route path="/" exact>
              <Carrusel />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Contacto">
              <Contacto />
            </Route>
            <Route path="/Ayuda">
              <Ayuda />
            </Route>
            <Route path="/Servicios">
              <Servicios />
            </Route>
            <Route path="/Nosotros">
              <Nosotros />
            </Route>
            <Route path="/Ubicacion">
              <Ubicacion />
            </Route>
          </div>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
