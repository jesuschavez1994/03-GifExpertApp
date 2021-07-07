import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ( {category} ) => {

    const [image, setImage] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])
    
    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=Yv6sw29HkE0IhCmxaDYRImsW7dxGU4L9&q=Goku&limit=10';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized.url
            }
        })
        setImage( gifs );
    }


    return (
        <>

        <h3> { category } </h3>

        <div  className="card-grid">
           {
                image.map( img => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
        </div>   
        


        </>
    )
}

export default GifGrid;

// apy_key = Yv6sw29HkE0IhCmxaDYRImsW7dxGU4L9