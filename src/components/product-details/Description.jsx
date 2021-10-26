import React from 'react'
import { useSelector } from 'react-redux'
import './Description.css'

const Description = () => {

    const { detailsProduct } = useSelector((state) => state.products);

    const {
        brand,
        model,
        price,
        cpu,
        ram,
        so,
        displayResolution,
        battery,
        primaryCamera,
        secondaryCmera,
        dimentions,
        weight
    } = detailsProduct;

    let isPrimaryCameraObject = false;
    let isSecondaryCameraObject = false;

    if (typeof primaryCamera === "object") {
        isPrimaryCameraObject = true;
    } else {
        isPrimaryCameraObject = false;
    }

    if (typeof secondaryCmera === "object") {
        isSecondaryCameraObject = true;
    } else {
        isSecondaryCameraObject = false;
    }

    return (
        <div className="description">
            <h2>Descripción</h2>
            <ul>
                <li><strong>Marca:</strong> {brand}</li>
                <li><strong>Modelo:</strong> {model}</li>
                <li> <strong>Precio:</strong>
                    {
                        price ? price + '€' : ' No disponible'
                    }
                </li>

                <li><strong>CPU:</strong> {cpu}</li>
                <li><strong>RAM:</strong> {ram}</li>
                <li><strong>Sistema operativo:</strong> {so} </li>
                <li><strong>Resolución de pantalla:</strong> {displayResolution} </li>
                <li><strong>Batería:</strong> {battery} </li>
                <li><strong>Cámaras:</strong>
                    <ul>

                        {
                            isPrimaryCameraObject ? primaryCamera.map(camera => <li key={camera}>{camera}(Trasera)</li>) :
                                <li>{primaryCamera}</li>
                        }


                        {
                            isSecondaryCameraObject ? secondaryCmera.map(camera => <li key={camera}>{camera}(Frontral)</li>) :
                                <li>{secondaryCmera}</li>
                        }

                    </ul></li>
                <li><strong>Dimensiones:</strong> {dimentions} </li>
                <li><strong>Peso:</strong> {weight} gr</li>
            </ul>
        </div >
    )
}

export default Description
