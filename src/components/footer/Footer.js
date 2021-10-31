import React from 'react';
import classes from './Footer.module.css';
import { FaTelegram, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useStateValue } from '../../StateProvider';

const Footer = () => {

    const [dark] = useStateValue();

    return (
        <div className={ ! dark.dark ? classes.footer : classes.footerLight}>
            <div className={classes.footer_wrapper}>
                <div className={classes.icon_group}>
                    <a href="https://xn--80affa3aj0al.xn--80asehdb/#/login">
                        <FaTelegram style={{ fontSize: "35px" }} className={classes.teleg} />
                    </a>
                    <a href="https://web.whatsapp.com/">
                        <FaWhatsapp style={{ fontSize: "35px" }} className={classes.what} />
                    </a>
                    <a href="https://www.instagram.com/?hl=ru">
                        <FaInstagram style={{ fontSize: "35px" }} className={classes.instag} />
                    </a>
                    <a href="https://www.instagram.com/?hl=ru">
                        <FaTwitter style={{ fontSize: "35px" }} className={classes.twit} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;