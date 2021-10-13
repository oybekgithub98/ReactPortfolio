import React from 'react';
import classes from './Portfel.module.css';
import NamImage from '../../assets/namangan.jpg';
import Calc from '../../assets/calc.jpg';
import Quran from '../../assets/quron-audios.png';
import City from '../../assets/city.jpg';
import TelegramImage from '../../assets/telegramImage.jpg';
import WhatsappImage from '../../assets/whatsappImage.jpg';
import { FaGithub } from 'react-icons/fa';
import { useStateValue } from '../../StateProvider';
// import { Link } from "react-router-dom";

const Portfel = () => {

    const [dark] = useStateValue();

    return (
        <div id="portfolio" className={!dark.dark ? classes.portfolio : classes.portLight}>
            <h3>My Portfolio</h3>
            <div className={classes.portfolio_box}>
                <div className={classes.portfolio_card2}>
                    <img src={TelegramImage} alt={TelegramImage} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML, SCSS and JAVASCRIPT</h4>
                        <a href="https://weathet-app.vercel.app/" target="blank">
                            View Project
                        </a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.portfolio_card2}>
                    <img src={WhatsappImage} alt={WhatsappImage} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML, SCSS and JAVASCRIPT</h4>
                        <a href="https://weathet-app.vercel.app/">View Project</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={classes.portfolio_card2}>
                    <img src={Quran} alt={Quran} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML, SCSS and JAVASCRIPT</h4>
                        <a href="https://instagramclone12345.vercel.app/" target="blank">View Project</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.portfolio_box}>
                <div className={classes.portfolio_card1}>
                    <img src={City} alt={City} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML, SCSS and JAVASCRIPT</h4>
                        <a href="https://weathet-app.vercel.app/">View Project</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.portfolio_card1}>
                    <img src={NamImage} alt={NamImage} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML, SCSS and JAVASCRIPT</h4>
                        <a href="https://weathet-app.vercel.app/">View Project</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.portfolio_card1}>
                    <img src={Calc} alt={Calc} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML, SCSS and JAVASCRIPT</h4>
                        <a href="https://weathet-app.vercel.app/">View Project</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfel;