import axios from "axios";
import React, { Component } from "react";
import './Home.css';
import Newpost from "./Newpost";



class Home extends Component {

  constructor(props) {
    super(props);


    this.state = {
      setPosts: []
    }
  }

  getLatestPosts = () => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    axios.post('https://akademia108.pl/api/social-app/post/latest', {}, axiosConfig)
      .then((res) => {
        this.setState({

          setPosts: res.data
        });
      })
  }

  
  getOlderPost = () => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    let data = {date: this.state.setPosts[this.state.setPosts.length - 1].created_at}
    axios.post('https://akademia108.pl/api/social-app/post/older-then',
          JSON.stringify(requestData),
          JSON.stringify(axiosConfig)
    )
    then((res) => {
      this.setState({setPosts: this.state.setPosts.concat(res.data) })
    })
  }



  componentDidMount() {
    this.getLatestPosts();
  }

  render() {
    let postElements = this.state.setPosts.map(userPost => {
      return (
       <div className='post'key={userPost.id}>
        <div className='avatar'>Uzytkownik<img src={userPost.user.avatar_url} alt="photo"></img></div>
        <div className='post-date'>Data{(userPost.created_at)}</div>
        <div className='post-text'>Tresc posta{userPost.content}</div>
        <div className="likes">Polubienia{userPost.likes.length}</div>
        </div>
      )
    });

    
    return (
      <button onClick={this.getOlderPost}>Pobierz</button>

    );

  }

}




export default Home;