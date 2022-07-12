import React from 'react';

function AlbumComponent({item}) {
    return (
        <div>
            <h2>{item.id}={item.title}</h2>
        </div>
    );
}

export {AlbumComponent};