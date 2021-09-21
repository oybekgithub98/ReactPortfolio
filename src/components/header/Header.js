import React from 'react';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useStateValue } from '../../StateProvider';

const Header = ({menu}) => {

    const [dark, dispatch] = useStateValue();
    console.log(dark, dispatch)

    return (
        <div className={!dark.dark ? "header" : "light"}>
            <div className="header_wrapper">
                <h3>Port<span>folio</span></h3>
                <div className="header_hamburger" onClick={menu}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Header
