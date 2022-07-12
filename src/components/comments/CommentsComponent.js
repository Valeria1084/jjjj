import React, {useEffect, useState} from 'react';

import {getComment} from "../../services";

function CommentsComponent() {
    const [comment,setComment] = useState()
    useEffect(()=>{
        getComment().then(value => setComment([...value]))
    },[])
    return (
        <div>
            {
                comment.map(value => <CommentsComponent item ={value} key={value.id}/>)
            }
        </div>
    );
}

export  {CommentsComponent};