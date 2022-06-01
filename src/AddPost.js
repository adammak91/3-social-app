import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";




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