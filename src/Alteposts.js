import React from 'react';
import './Alteposts.css'

function Alteposts(props) {

    let listPost = props.posts.map(post => {
        return (

            <div key={post.id}><div className="username">
                    {post.user.username},
                    {post.created_at}
                </div>
                <div className="post">{post.content}</div>
                
            </div>
        )
    });

    return (
        <div className="postsList">{listPost}</div>
        
    )
}

export default Alteposts;