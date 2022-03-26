import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Login from './components/login.components';
import Cadastro from './components/cadastro.components';
import bootstrap from 'bootstrap'

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


function App() {
    return(<Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>Wallets</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/cadastro"}>Cadastro</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    
          <div className="outer">
            <div className="inner">
                    <Routes>
                        <Route exact path='/' element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                    </Routes>
            </div>
          </div>
        </div></Router>
        
    );

}



export default App;
