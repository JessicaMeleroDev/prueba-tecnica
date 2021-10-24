import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div class="card">
            <img 
                src="https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg" 
                alt="Producto" 
                width="200"
                height="300" 
            />
            <div class="container-details">
                <h4>Acer Iconia Talk S</h4>
                <p>170 €</p>
            </div>
            <button>Ver detalles</button>
        </div>
    )
}

export default Card;
