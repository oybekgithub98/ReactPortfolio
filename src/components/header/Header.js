import React from 'react';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { useStateValue } from '../../StateProvider';

const Header = ({ menu, menuActive }) => {


    const [dark] = useStateValue();

    return (
        <div className={!dark.dark ? "header" : "light"}>
            <div className="header_wrapper">
                <a href="/#"><h3 className="header_logo">Port<span>folio</span> salom</h3></a>
                <div className="header_hamburger" onClick={menu}>
                    {
                        !menuActive ?
                            <GiHamburgerMenu />
                            :
                            <FaTimes />
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
