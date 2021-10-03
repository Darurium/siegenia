import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./siegenia_logo.jpg"
import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className="navbar1">
            <div className="navbar1__container">
                <div className="navbar1__wrapper">
                    <div className="navbar1__menu">
                        <ul className="navbar1__list">
                            <li className="navbar1__item">
                                <Link to="/classic" className="navbar1__link">Classic</Link>
                            </li>
                            <li className="navbar1__item">
                                <Link to="/titan" className="navbar1__link">Titan</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar1__logo">
                        <Link to="/">
                            <img src={logo} alt="Логотип Siegenia" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;