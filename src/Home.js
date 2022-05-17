import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import Alteposts from './Alteposts';


class Home extends Component {

    constructor() {
        super();

        this.state = {
          postList: []
      };
    }


    getPosts = () => {
      let axiosConfig = {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      };

      axios.post('https://akademia108.pl/api/social-app/post/latest',{},axiosConfig)
      .then((res) => {
          console.log(res.data);
          this.setState({postList:res.data})
      })
  }

  componentDidMount(){
      this.getPosts();
  }


  render() {
      return (
  
          <div className="postsList">
              <h3>Posts</h3>
              <Alteposts posts={this.state.postList} />
          </div>
      )
      // return (
        
      //   <div>{postElements}<button onClick={()=> <Newpost></Newpost>}>Pobierz wiecej</button></div>
      // )
    }
  }

   


export default Home;