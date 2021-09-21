import React from 'react';
import './SidebarMenu.css';
import Home from '../../assets/@foydali_link 31.png';
import About from '../../assets/about.png';
import Services from '../../assets/services.png';
import Portfolio from '../../assets/portfolio.png';
import Contact from '../../assets/contact.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const SidebarMenu = () => {

    const [dark] = useStateValue();
    console.log(dark);

    return (
        <Router>
            <div className={!dark.dark ? "sidebar_menu" : "sidebar_menu"}>
                <div className="sidebar_menu_wrapper">
                    <div className="menu">
                        <div className="menu_item_left" >
                            <Link className="home_item" href="https://faxriyorcreateportfolio.netlify.app/images/3d%20images/@foydali_link%2031.png">Home</Link>
                        </div>
                        <div className="menu_item_right">
                            <img src={Home} alt={Home} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <Link href="https://www.kun.uz">About me</Link>
                        </div>
                        <div className="menu_item_right">
                            <img src={About} alt={About} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <Link href="https://www.kun.uz">Services</Link>
                        </div>
                        <div className="menu_item_right">
                            <img src={Services} alt={Services} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <Link href="https://www.kun.uz">Porfolio</Link>
                        </div>
                        <div className="menu_item_right">
                            <img src={Portfolio} alt={Portfolio} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <Link href="https://www.kun.uz">Contacts</Link>
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
