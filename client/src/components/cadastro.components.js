import React, { Component } from "react";

export default class Cadastro extends Component {
    render() {
        return (
            <form>
                <h3>Cadastro</h3>

                <div className="form-group">
                    <label>Primeiro nome </label>
                    <input type="text" className="form-control" id="primeiroNome" />
                </div>

                <div className="form-group">
                    <label>Ultimo nome </label>
                    <input type="text" className="form-control" id="ultimoNome"/>
                </div>

                <div className="form-group">
                    <label>Email </label>
                    <input type="email" className="form-control" id="email"/>
                </div>

                <div className="form-group">
                    <label>Senha </label>
                    <input type="password" className="form-control" id="senha"/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={verificaUsuario(document.getElementById("email"), document.getElementById("senha"))}>Register</button>

            </form>

            
        );

        function verificaUsuario(email, senha) {
        
        }
    }

}