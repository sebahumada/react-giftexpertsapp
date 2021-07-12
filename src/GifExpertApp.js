import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid.js';

export default function GifExpertApp() {    
    
    const [categories, setCategories] = useState(['The Simpsons']);

    // const handleAdd = () => {
    //     //setCategories([...categories,'Supercampeones']);
    //     //setCategories(['Supercampeones',...categories]);
    //     setCategories(cats=>[...cats,'Supercampeones']);
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>            
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />                        
                    ))                    
                }
                
            </ol>
        </>
    )
}
