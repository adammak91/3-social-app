import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

class PostAdd extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
    }
  }

  addPost = () => {
    e.preventDefault();

    let data = {
      content: this.userAddPost
    }

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: "Bearer " + this.props.user.jwt_token
      }
    };

    axios.post(
      'https://akademia108.pl/api/social-app/post/add', {data}, axiosConfig)
      .then(res => {
        console.log(res);
        this.setState({message: res.data})
      }

      ).catch(error => {
        console.log(error.data.message);
        this.setState(error.data)
      })
  }


  render() {
    return (
      <div className="add-post">
        
          <form className="form addPost" onSubmit={e => this.addPost(e)}>
            <textarea placeholder="dodaj post" onChange={(e) => this.userAddPost(e)}></textarea>
            <button type="submit" className="btn">Dodaj Post</button>
          </form>
        
      </div>
    )
  }
}

export default AddPost;