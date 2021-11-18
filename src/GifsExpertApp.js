import React, {useState} from "react";
import AddCategory from "./components/AddCategory";

import './GifsExpertApp.css'

const GifsExpertApp = () => {
    const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //   setCategories( [...categories, 'Naruto']);

    // 

    return (
        <>
            <h2>GifsExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>


            <ul>
                {
                    categories.map( category => {
                        return <li key={category}>{category}</li>
                    })                
                }
            </ul>
           
        </>
    )
};

export default GifsExpertApp;
