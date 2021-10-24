import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts, startGetProducts } from '../../redux/actions/product';

import './Search.css';

const Search = () => {

    const [filter, setFilter] = useState("");

    const dispatch = useDispatch();

    const onChange = (e) => {
        const {value} = e.target;

        setFilter(value);

        if (value.trim().length > 1) {
            dispatch(filterProducts(value.trim()));
          } else {
            dispatch(startGetProducts());
          }
    }

    return (
        <div className="container-search">
            <label>Busca tu dispositivo</label>
            <input 
            type="text" 
            id="buscador" 
            className="search"
            placeholder="Ej: Iphone 13 mini" 
            value={filter}
            onChange={onChange}
             />
        </div>
    )
}

export default Search;
