import React from 'react';

function PostComponent({item}) {
    return (
        <div>
            <h3>{item.id}</h3>
            <h3>{item.body}</h3>
            <h3>{item.title}</h3>

        </div>
    );
}

export {PostComponent};