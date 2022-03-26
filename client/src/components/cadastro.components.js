import React, { Component } from "react";
import api from "../services/api";

export default class Cadastro extends Component {

    state= {
        full_name: "",
        cpf: "",
        email: "",
        password: "",
    }

     handleSignUp=event=>{
        event.preventDefault()
        api.post('/api/v1/wallets', this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSignUp}>
                <h3>Cadastro</h3>

                <div className="form-group">
                    <label>Nome Completo</label>
                    <input
                     type="text" 
                     className="form-control"
                     id="NomeCompleto"
                     onChange={event => this.setState({full_name: event.target.value})} />
                </div>

                <div className="form-group">
                    <label>CPF</label>
                    <input
                     type="text"
                     className="form-control"
                     id="cpf"
                     onChange={event => this.setState({cpf: event.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Email </label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    onChange={event => this.setState({email: event.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Senha </label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="senha"
                    onChange={event => this.setState({password: event.target.value})}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Cadastrar</button>

            </form>

            
        );

    }

}