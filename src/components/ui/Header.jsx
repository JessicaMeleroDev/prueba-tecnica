import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';

import './Header.css';

const Header = () => {
    return (
        <header className="container aling-items">
            <h2>Shop</h2>
            <BiShoppingBag size={30} className="icon" />
        </header>
    )
}

export default Header;
