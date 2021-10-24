import React from 'react'
import './Actions.css';

const Actions = () => {
    return (
        <div className="container-actions">
            <h4>Selecciona las caracteristicas</h4>
            <div className="container-selects">
                <select>
                    <option value="0">Almacenamiento</option>
                    <option value="1">64 Gb</option>
                    <option value="2">128 GB</option>
                </select>
                <select>
                    <option value="0">Colores</option>
                    <option value="1">Amarillo</option>
                    <option value="2">Azul</option>
                </select>
            </div>

            <div className="container-button">
                <button>Añadir al carrito</button>
            </div>

        </div>
    )
}

export default Actions
