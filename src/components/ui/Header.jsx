import React from 'react';
import { useHistory } from 'react-router-dom';

import { BiShoppingBag } from 'react-icons/bi';

import './Header.css';

const Header = () => {
    const history = useHistory();

    const goHome = () => {
        history.push("/");
    }

    return (
        <header className="container aling-items">
            <h2 onClick={() => goHome()} className="link">Shop</h2>
            <BiShoppingBag size={30} className="icon" />
        </header>
    )
}

export default Header;
