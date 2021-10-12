import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__wrapper">
                    <ul className="navbar__menu_left">
                        <li className="navbar__item">
                            <Link to="/" className="navbar__link">На главную</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/classic" className="navbar__link">Classic</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/titan" className="navbar__link">Titan</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/axxent24" className="navbar__link">Axxent24</Link>
                        </li>
                    </ul>
                    <ul className="navbar__menu_right">
                        <li className="navbar__item">
                            <Link to="/info" className="navbar__link">Инструкция</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;