import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = (e) => setCategories( [...categories, 'Pokemon'] );

    return (
        <>
            <h2>GifExpert</h2>
                <AddCategory  setCategories = { setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid category = { category } key={category} />
                    })
                }
            </ol>
        </>
    )

}

export default GifExpertApp;