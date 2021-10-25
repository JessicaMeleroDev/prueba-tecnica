import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startGetProducts } from '../../redux/actions/product';
import Search from '../ui/Search';
import Card from './Card';

import './ProductList.css'

const ProductList = () => {

    const dispatch = useDispatch();

    const { products, loadData } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(startGetProducts())
    }, [dispatch])

    return (
        <Fragment>
            <div className="container-search">
                <Search />
            </div>
            <div className="container-list">
                {loadData && <p>Cargando datos....</p>}

                {!loadData &&

                    products.map((product) => {
                        const { id, brand, model, imgUrl, price } = product;
                        return (
                            <Card key={id} id={id} brand={brand} model={model} imgUrl={imgUrl} price={price} />
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default ProductList;
