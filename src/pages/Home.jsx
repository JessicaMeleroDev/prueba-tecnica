import React from 'react'
import ProductList from '../components/products/ProductList';
import Header from '../components/ui/Header';

export const Home = () => {
    return (
        <div>
            <Header />
            <ProductList />
        </div>
    )
}

export default Home;
