import './Actions.css';

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { startInsertProductBasket } from '../../redux/actions/product';

const Actions = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [selectedColor, setColor] = useState('Elije un color')
    const [selectedStorage, setStorage] = useState('Elije un almacenamiento')

    const { detailsProduct, setProductBasketSuccess } = useSelector((state) => state.products);

    useEffect(() => {
        if (detailsProduct) {
            setColor(detailsProduct.options.colors[0].code);
            setStorage(detailsProduct.options.storages[0].code);
        }
    }, [detailsProduct]);

    const onChangeColor = (e) => {
        setColor(e.target.value);
    }

    const onChangeStorage = (e) => {
        setStorage(e.target.value);
    }

    const insertProductBasket = (e) => {
        e.preventDefault();

        const newProduct = {
            id: detailsProduct.id,
            colorCode: selectedColor,
            storageCode: selectedStorage
        }

        dispatch(startInsertProductBasket(newProduct))
    }

    const goHome = () => {
        history.push("/");
    }

    return (
        <div className="container-actions">
            <h4>Selecciona las caracteristicas</h4>

            <div className="container-selects">
                <select name="color" id="color" value={selectedColor} onChange={onChangeColor}>
                    {
                        detailsProduct.options.colors.map((color) => {
                            return <option key={color.code} value={color.code}>{color.name}</option>

                        })
                    }
                </select>
                <select name="storage" id="storage" value={selectedStorage} onChange={onChangeStorage}>
                    {
                        detailsProduct.options.storages.map((storage) => {
                            return <option key={storage.code} value={storage.code}>{storage.name}</option>

                        })
                    }
                </select>
            </div>

            {detailsProduct.price && <div className="container-button">
                <button onClick={insertProductBasket}>Añadir al carrito</button>
            </div>}

            {!detailsProduct.price && <div className="container-button">
                <button onClick={goHome}>Volver atrás</button>
            </div>}

            {
                setProductBasketSuccess && <div className="container-msg">
                    <p className="text-msg">Producto añadido correctamente</p>
                </div>
            }


        </div>
    )
}

export default Actions
