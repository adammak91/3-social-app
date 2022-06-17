import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import './AddPost.css';



class AddPost extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: '',
  //   }
  // }


  addnewPost = (e) => {
    e.preventDefault();

    const data = {
      content: this.textinput.value
    }

    
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer' + this.props.user?.jwt_token
      }
    };

    axios.post('https://akademia108.pl/api/social-app/post/add', {data}, axiosConfig)
      .then((res) => {

        console.log(res);
        // this.setState({value: res.data.value })
        // this.textinput.value = '';

      })
    // .catch((err) => {
    //   console.error(err);
    // }); 
  }


  render() {
    return (
      <div className="add-post">
        {!this.props.user &&
          <form onSubmit={this.addnewPost} className="addnewPost">
            <textarea ref={textarea => this.textinput = textarea}
              placeholder="Treść posta ..." ></textarea>
            <button type="submit" className="addbutton">Upublicznij</button>
          </form>
        }
      </div>
    )
  }
}




export default AddPost;