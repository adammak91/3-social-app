import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import Home from './Home';
import { render } from '@testing-library/react';




class App extends Component {


  constructor() {
    super();
  }


render() {



  return (
    <div className="App">

      <nav>
        <h2 className='Header'>Social-app</h2>
        <ul>
          <li className='Home'>
            <Link to="/">Home</Link>
          </li>

          <li className='Login'>
            <Link to="login">Login</Link>
          </li>

          <li className='Signup'>
            <Link to="signup">SignUp</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>


    </div>




  );
  }
}


export default App;
