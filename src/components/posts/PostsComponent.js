import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

import {getPost} from "../../services";
import {PostComponent} from "./PostComponent";


function PostsComponent() {
      const {postId}=useParams()
    const [posts,setPost] = useState([])
    useEffect(()=>{
        getPost(postId).then(value => setPost([{...value}]))
    },[postId])
    return (
        <div>
            {
                posts.map(value => <PostComponent item={value} key={value.id}/> )
            }
        </div>
    );
}

export {PostsComponent};