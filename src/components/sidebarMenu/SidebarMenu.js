import React from 'react';
import './SidebarMenu.css';
import Home from '../../assets/@foydali_link 31.png';
import About from '../../assets/about.png';
import Services from '../../assets/services.png';
import Portfolio from '../../assets/portfolio.png';
import Contact from '../../assets/contact.png';
import { BrowserRouter as Router } from 'react-router-dom';
// import { useStateValue } from '../../StateProvider';

const SidebarMenu = () => {

    // const [dark] = useStateValue();
    // console.log(dark);

    return (
        <Router>
            <div id="sidebar_menu" className="sidebar_menu">
                <div className="sidebar_menu_wrapper">
                    <div className="menu">
                        <div className="menu_item_left" >
                            <a className="home_item" href="#home">Home</a>
                        </div>
                        <div className="menu_item_right">
                            <img src={Home} alt={Home} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <a href="#about">About me</a>
                        </div>
                        <div className="menu_item_right">
                            <img src={About} alt={About} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <a href="#services">Services</a>
                        </div>
                        <div className="menu_item_right">
                            <img src={Services} alt={Services} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <a href="#portfolio">Porfolio</a>
                        </div>
                        <div className="menu_item_right">
                            <img src={Portfolio} alt={Portfolio} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <a href="#contact">Contacts</a>
                        </div>
                        <div className="menu_item_right">
                            <img src={Contact} alt={Contact} />
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default SidebarMenu
