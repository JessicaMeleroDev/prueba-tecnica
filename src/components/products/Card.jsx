import React from 'react';
import { useHistory } from 'react-router-dom';

import './Card.css';

const Card = () => {
    const history = useHistory();

    const goDetails = (id) => {
        history.push(`/product-details/${id}`)
    }

    return (
        <div className="card">
            <img 
                src="https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg" 
                alt="Producto" 
                width="200"
                height="300" 
            />
            <div className="container-details">
                <h4>Acer Iconia Talk S</h4>
                <p>170 €</p>
            </div>
            <button onClick={() => goDetails(1234)}>Ver detalles</button>
        </div>
    )
}

export default Card;
