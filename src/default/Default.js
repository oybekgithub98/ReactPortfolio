import React, { useState } from 'react';
import './Default.css';
import Header from '../components/header/Header';
import SidebarLeft from '../components/sidebar/SidebarLeft';
import Banner from '../components/banner/Banner';

const Default = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    const openMenu = (e) => {
        const sidebar = document.querySelector('.sidebar_menu');

        if (!menuOpen) {
            sidebar.classList.add('activeMenu');
            setMenuOpen(true);
        } else {
            sidebar.classList.remove('activeMenu');
            setMenuOpen(false);
        }

        let x;
        x = document.querySelectorAll(".menu");

        for (let i = 0; i < x.length; i++) {
            if (!menuOpen) {
                x[i].classList.add('menu_active');
                setMenuOpen(true);
            } else {
                x[i].classList.remove('menu_active');
                setMenuOpen(false);
            }
        }
    }

    return (
        <div>
            <Header menu={openMenu} />
            <div className="default_banner">
                <SidebarLeft />
                <Banner />
            </div>
        </div>
    )
}

export default Default