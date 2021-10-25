import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import Description from './Description';
import Image from './Image';
import Actions from './Actions';
import { startGetDetailProduct } from '../../redux/actions/product';

import './Details.css';

const Details = () => {

    const dispatch = useDispatch();

    const {id} = useParams();

    const { detailsProduct,loadDataGetDetails } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(startGetDetailProduct(id))
    }, [id,dispatch]);

    if(loadDataGetDetails) return <p>Cargando datos ...</p>

    if(!detailsProduct) return <p>No hay productos</p>

    return (
        <div className="container-details">
            <Image url={detailsProduct.imgUrl}/>
            <div className="container-right">
                <Description />
                <Actions />
            </div>
        </div>
    )
}

export default Details
