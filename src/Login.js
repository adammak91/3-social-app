import React, { Component } from "react";
import './Login.css';
import axios from "axios";

class Login extends Component {


    hendleSubmit = (e) => {
        e.preventDefault()


        const user = {
            "username": "adam",
            "password": "1234",
            "ttl": "3600"

        }
        console.log(user)

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        axios.post('https://akademia108.pl/api/social-app/user/login',JSON.stringify(user),
            { 'headers': headers })
            .then((req) => {

                localStorage.setItem('user', JSON.stringify(user));

                console.log(req.data);})
            
            // .catch((error) => {
            //     console.error(error);
            // })
    }
    render() {

        return (
            <div>
                <h3>Login</h3>
                <form>
                    <div className="form-group">
                        <label className="LoginLabel">Nazwe uzytkownika</label>
                        <input className="LoginInput" type="text" onChange={e => this.username = e.target.value} minLength={4}></input>

                        <label className="LoginLabel">Wpisz haslo</label>
                        <input className="LoginInput" type="password" onChange={e => this.password = e.target.value}></input>

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