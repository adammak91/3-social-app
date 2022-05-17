import React from "react";


const Login = () => {

    return(
        <div>
        <h3>Login</h3>
         <form>
             <div className="form-group">
                   <label>Nazwe uzytkownika</label>
                   <input type="text" minLength={4}></input>
                   <label>Wpisz haslo</label>
                   <input type="password"></input>
                   <label>Zaloguj sie</label>
                   <input type="submit" className="submit"></input>
             </div>
         </form>
       </div> 
    );
}


export default Login;