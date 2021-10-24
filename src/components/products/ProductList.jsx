import React, { Fragment } from 'react'
import Search from '../ui/Search';

import './ProductList.css'

const ProductList = () => {
    return (
        <Fragment>
            <div className="container-search">
                <Search />
            </div>
        </Fragment>
    )
}

export default ProductList;
