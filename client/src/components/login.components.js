import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Login</h3>

                <div className="form-group">
                    <label>Email </label>
                    <input type="email" className="form-control"  />
                </div>

                <div className="form-group">
                    <label>Senha </label>
                    <input type="password" className="form-control"id="senha" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" >Entrar</button>
                
            </form>
        );

        
        
                  
    };

    

    
}