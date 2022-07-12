import React from 'react';

import {Link} from "react-router-dom";

function CommentComponent({item}) {
    return (
        <div>
            <h2>{item.name}-{item.email}</h2>
            <p>{item.body}</p>
            <span><Link to={item.postId.toString()}>Post for comment</Link></span>
        </div>
    );
}

export {CommentComponent};