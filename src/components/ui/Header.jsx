import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { BiShoppingBag } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getBreadcrumbs } from '../../redux/actions/breadcrumbs';

import './Header.css';

const Header = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const { mount } = useSelector((state) => state.products);
    const { currentUrl } = useSelector((state) => state.breadcrumbs);

    const goHome = () => {
        history.push("/");
    }

    useEffect(() => {
        const currenPathName = window.location.pathname;
        dispatch(getBreadcrumbs(currenPathName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch,window.location.pathname]);

    return (
        <header className="container aling-items">
            <h2 onClick={() => goHome()} className="link">Shop</h2>
            <div className="container-breadcrumbs">
                    { currentUrl && currentUrl.map((breadcrumb) => {
                        return <p key={breadcrumb.name} className="text-breadcrumb">{breadcrumb.name}</p>
                    })}
                </div>
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
