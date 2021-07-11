import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';

import { useFecthGifs } from '../hooks/useFecthGifs';

const GifGrid = ( {category} ) => {

    const { data: imgs, loading } = useFecthGifs( category );

    return (
        <>

        <h3> { category } </h3>

        { loading ? 'Loading...' : 'Data Cargada'}

        <div  className="card-grid">
           {
                imgs.map( img => (
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;

// apy_key = Yv6sw29HkE0IhCmxaDYRImsW7dxGU4L9