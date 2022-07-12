import React from 'react';

function TodoComponent({item}) {
    return (
        <div>
            <h2>{item.id}-{item.title}</h2>
        </div>
    );
}

export {TodoComponent};
