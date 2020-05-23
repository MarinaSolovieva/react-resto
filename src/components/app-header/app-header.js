import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from "react-router-dom";

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to={"/"} className="header__link" href="#">
                Menu
            </Link>
            <Link to={"/cart"} className="header__link" href="#">
                <img className="header__cart" src={cartIcon} alt="cart"/>
                Total: {total} $
            </Link>
        </header>
    )
};

export default AppHeader;