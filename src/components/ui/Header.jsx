import React from 'react';
import { useHistory } from 'react-router-dom';

import { BiShoppingBag } from 'react-icons/bi';
import { useSelector } from 'react-redux';

import './Header.css';

const Header = () => {

    const history = useHistory();

    const { mount } = useSelector((state) => state.products);


    const goHome = () => {
        history.push("/");
    }

    return (
        <header className="container aling-items">
            <h2 onClick={() => goHome()} className="link">Shop</h2>
            <div className="aling-items">
                {
                    mount !== 0 && <p style={{ fontWeight: 'bold' }}>{mount}</p>
                }
                <BiShoppingBag size={30} className="icon" />
            </div>
        </header>
    )
}

export default Header;
