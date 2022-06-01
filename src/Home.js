import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import Alteposts from './Alteposts';



class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postList: []
        };
    }


    getPosts = () => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: "Bearer " + this.props.user?.jwt_token
            },
        };

        axios.post('https://akademia108.pl/api/social-app/post/latest', {}, axiosConfig )
            .then((res) => {
                // console.log(res.data);
                this.setState({ postList: res.data });
            });
    };



    getNextPost = () => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: "Bearer " + this.props.user?.jwt_token,
            },
        };
        axios.post('https://akademia108.pl/api/social-app/post/older-then',
            { date: this.state.postList[this.state.postList.length - 1].created_at },
            axiosConfig )
            .then((res) => {
                this.setState({ postList: this.state.postList.concat(res.data) });
            });
        // .catch((err) => {
        //     console.log("AXIOS ERROR: ", err);
        // })
    };

    componentDidMount() {
        this.getPosts();
    }

    // componentDidUpdate() {
    //     this.getPosts();
    //   }

    render() {
        return (
            <div className="postsList">
                <h3>Posts</h3>
                <Alteposts posts={this.state.postList} />
                <button onClick={this.getNextPost}>Wiecej</button>
            </div>
        );
    }
}

export default Home;