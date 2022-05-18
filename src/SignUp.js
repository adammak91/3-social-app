import React from "react";
import './SignUp.css';



const SignUp = () => {

    return(
        
        <div>
        <h3>SignUp</h3>
         <form action='http://akademia108.pl/api/social-app/user/signup' method="POST">
             <div className="form-group">
                   <label>Nazwa uzytkownika</label>
                   <input type="text" minLength={5}></input>
                   <label>Adress Email</label>
                   <input type="e-mail"></input>
                   <label>Utworz haslo</label>
                   <input type="password"></input>
                   <label>Potwierdz haslo</label>
                   <input type="password"></input>
                   <label></label>
                   <input type="submit" className="submit"></input>
            </div>
         </form>
       </div> 
    );  
}


export default SignUp;