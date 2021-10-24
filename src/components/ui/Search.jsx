import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="container-search">
            <label>Busca tu dispositivo</label>
            <input 
            type="text" 
            id="buscador" 
            className="search"
            placeholder="Ej: Iphone 13 mini" 
             />
        </div>
    )
}

export default Search;
