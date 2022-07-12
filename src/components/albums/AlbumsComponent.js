import React, {useEffect, useState} from 'react';
import {getAlbums} from "../../services";


function AlbumsComponent() {
    const [albums,setAlbums]= useState([])
    useEffect(()=>{
      getAlbums().then(value => setAlbums([...value]))
    },[])
    return (
        <div>
            {
                albums.map(value => <AlbumsComponent item={value} key={value.item}/>)
            }
        </div>
    );
}

export{AlbumsComponent};

