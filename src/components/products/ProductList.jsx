import React, { Fragment } from 'react'
import Search from '../ui/Search';
import Product from './Product';

import './ProductList.css'

const ProductList = () => {
    return (
        <Fragment>
            <div className="container-search">
                <Search />
            </div>
            <Product />
        </Fragment>
    )
}

export default ProductList;
