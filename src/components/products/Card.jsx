import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import './Card.css';

const Card = ({ id, brand, model, imgUrl, price }) => {
    const history = useHistory();

    const goDetails = (id) => {
        history.push(`/product-details/${id}`)
    }

    return (
        <div className="card">
            <img
                src={imgUrl}
                alt="Producto"
                width="200"
                height="300"
            />
            <div className="container-details">
                <p>{brand} {model}</p>
                {price ? <p>{price} €</p> : <p className="unavailable">NO DISPONBLE</p>} 
            </div>
            
            <button onClick={() => goDetails(id)}>Ver detalles</button>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default Card;
