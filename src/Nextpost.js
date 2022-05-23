import React from 'react';
import './Alteposts.css'

function Nextpost(props) {

    let morePost = props.posts.map(post => {
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
        <div className="morepost">{morePost}</div>
        
    )
}

export default Nextpost;