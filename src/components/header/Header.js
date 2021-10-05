import React, { useEffect } from 'react';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { useStateValue } from '../../StateProvider';
import { TimelineLite } from 'gsap';

const Header = ({ menu, menuActive, setMenuActive }) => {


    const [dark] = useStateValue();

    const gp = new TimelineLite({ delay: 0.3 });
    useEffect(() => {
        gp
            .from('.header', { duration: 1.5, y: '-100%', ease: 'bounce' }, 'start')
            .from('.header_hamburger', { duration: 0.7, opacity: 0, x: "100px", rotation: "360" })
            .from('.header_logo', { duration: 0.7, opacity: 0, x: "-100px" })

    }, [])


    return (
        <div className={!dark.dark ? "header" : "light"}>
            <div className="header_wrapper">
                <h3 className="header_logo">Port<span>folio</span></h3>
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
