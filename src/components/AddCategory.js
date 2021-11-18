import React, {useState} from 'react'

import PropTypes from "prop-types";

const AddCategory = ( {setCategories} ) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChanged = ( e ) => {
        setInputValue(e.target.value)

    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [...cats, inputValue]);
            setInputValue('');
        }
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Buscar Gif'
                value={ inputValue }
                onChange={handleInputChanged} />         
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
