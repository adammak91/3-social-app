import React, { Component } from "react";
import './Login.css';
import axios from "axios";
import { Navigate } from "react-router";

class Login extends Component {
    hendleSubmit = (e) => {
        e.preventDefault()

        console.log(this.username);
        const user = {
            username: this.username,
            password: this.password,
            ttl: "3600",
        };
        // console.log(user);

        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        axios
        .post("https://akademia108.pl/api/social-app/user/login", user, {
          headers: headers,
        })

            .then((req) => {
                localStorage.setItem("user", JSON.stringify(req.data));
                this.props.setUser(req.data);
                // console.log(req.data);
            });
            
            // .catch((error) => {
            //     console.error(error);
            // })
    };

    render() {
        return (
            <div>
                {this.props.user && <Navigate to="/" />}
                <h3>Login</h3>
                <form onSubmit={this.hendleSubmit}>
                    <div className="form-group">
                        <label className="LoginLabel">Nazwe uzytkownika</label>
                        <input className="LoginInput" type="text" onChange={(e) => (this.username = e.target.value)} minLength={4}></input>

                        <label className="LoginLabel">Wpisz haslo</label>
                        <input className="LoginInput" type="password" onChange={(e) => (this.password = e.target.value)}></input>

                        <div className="Loginbutton">
                            <input type="submit" className="submit" value="Login"></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default Login;