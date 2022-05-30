import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Logout from './Logout';
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  // console.log(user);

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer' + this.state.user?.jwt_token,
    }
  };


  const Logout = (e) => {
    e.preventDefault();

    axios.post('https://akademia108.pl/api/social-app/user/logout', {}, axiosConfig)

      .then((req) => {
        localStorage.removeItem('user');
        // let reqData = req.data;
      //  localStorage.clear('user');
        setUser(req.data);
      });

  //      error => {
  //   console.log(error);

  // };
}


  return (


    <div className="App">

      <nav>

        <h2 className='header'>Social-App</h2>

        <ul>
          <li className='home'>
            <Link to="/">Home</Link>
          </li>

          {!user && <li className='login'>
            <Link to="/login">Login</Link>
          </li>}

          {!user && <li className='signup'>
            <Link to="/signup">SignUp</Link>
          </li>}

          {!user && <li className='logout'>
            <Link to="/" onClick={Logout}>Logout</Link>
          </li>}

        </ul>

      </nav>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} user={user} />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>

    </div>

  );
};




export default App;