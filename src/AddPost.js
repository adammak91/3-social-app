import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import './AddPost.css';



class AddPost extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     postContent: "",
  //   }
  // }


  addnewPost = (e) => {
    e.preventDefault();


    const data = {
      content: this._inputName.value
    }

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer' + this.props.user?.jwt_token
      }
    };

    axios.post('https://akademia108.pl/api/social-app/post/add', data, axiosConfig)
      .then((res) => {
        console.log(res.data);
      })
      // .catch((err) => {
      //   console.error(err);
      // });




    return (
      <div className="add-post">
        <form onSubmit={this.addnewPost} className="addnewPost">
          <textarea placeholder="Treść posta ..."></textarea>
          <button type="submit" className="addbutton">Upublicznij</button>
        </form>
      </div>
    )
  }
}




export default AddPost;