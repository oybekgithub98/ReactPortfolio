import React from 'react';
import './SidebarMenu.css';
import Home from '../../assets/@foydali_link 31.png';
import About from '../../assets/about.png';
import Services from '../../assets/services.png';
import Portfolio from '../../assets/portfolio.png';
import Contact from '../../assets/contact.png';
import { useStateValue } from '../../StateProvider';
import { useTranslation } from 'react-i18next';

const SidebarMenu = () => {

    const [dark] = useStateValue();
    const { t } = useTranslation();

    return (
            <div id="sidebar_menu" style={!dark.dark ? {backgroundColor: "rgb(43, 44, 47)"} : {backgroundColor: "#eeecec", boxShadow: "1px 10px 10px 0.1px grey"}} className="sidebar_menu">
                <div className="sidebar_menu_wrapper">
                    <div className="menu">
                        <div className="menu_item_left" >
                            <a style={!dark.dark ? {color: "white"} : {color: "#484848"}} className="home_item" href="#home">{t("menu_item_a1")}</a>
                        </div>
                        <div className="menu_item_right" style={!dark.dark ? {border: "2px solid #fff"} : {border: "2px solid grey"}}>
                            <img src={Home} alt={Home} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <a style={!dark.dark ? {color: "white"} : {color: "#484848"}} href="#about">{t("about_h3")}</a>
                        </div>
                        <div className="menu_item_right" style={!dark.dark ? {border: "2px solid #fff"} : {border: "2px solid grey"}}>
                            <img src={About} alt={About} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <a style={!dark.dark ? {color: "white"} : {color: "#484848"}} href="#services">{t("servicees")}</a>
                        </div>
                        <div className="menu_item_right" style={!dark.dark ? {border: "2px solid #fff"} : {border: "2px solid grey"}}>
                            <img src={Services} alt={Services} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <a style={!dark.dark ? {color: "white"} : {color: "#484848"}} href="#portfolio">{t("portfolio")}</a>
                        </div>
                        <div className="menu_item_right" style={!dark.dark ? {border: "2px solid #fff"} : {border: "2px solid grey"}}>
                            <img src={Portfolio} alt={Portfolio} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_item_left">
                            <a style={!dark.dark ? {color: "white"} : {color: "#484848"}} href="#contact">{t("contact")}</a>
                        </div>
                        <div className="menu_item_right" style={!dark.dark ? {border: "2px solid #fff"} : {border: "2px solid grey"}}>
                            <img src={Contact} alt={Contact} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SidebarMenu;
