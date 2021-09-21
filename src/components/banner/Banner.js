import React from 'react';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import Portfel from '../portfel/Portfel';
import Services from '../services/Services';
import { useStateValue } from '../../StateProvider';
import './Banner.css';

const Banner = () => {

    const [dark, dispatch] = useStateValue();
    console.log(dark, dispatch);

    return (
        <div className={ ! dark.dark ? "banner" : "bannerLight"}>
            <div className="banner_wrapper">
                <Home />
                <About />
                <Services />
                <Portfel />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Banner
