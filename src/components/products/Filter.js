import './filter.css';
import React, { useState } from 'react';
import './Products';

const Filter = function Filter({filtrer}){
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const handleClick = () => {
        filtrer(min, max);
    }

    return (
        <div className='filter'>
            <h2>Filtrer les produits</h2>
            <p>Prix min: <input type="text" value={min} onChange={e => setMin(e.target.value)} /></p>
            <p>Prix max: <input type="text" value={max} onChange={e => setMax(e.target.value)} /></p>
            <p><button onClick={handleClick}>Valider</button></p>
        </div>
    );
}

export default Filter;
