import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValu] = useState('');

    const handleInputChange = (e) => {
        setInputValu(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length  > 2 ){
            setCategories( cats => [ inputValue, ...cats] );
            setInputValu('');
        }
    }

    return (
        <form onSubmit = { handleSubmit }>
             <p> { inputValue } </p>
            <input 
                type="text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;