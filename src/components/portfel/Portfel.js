import React from 'react';
import classes from './Portfel.module.css';
import Quran from '../../assets/quron-audios.png';
import City from '../../assets/city.jpg';
import cart from '../../assets/cart.png';
import shopping from '../../assets/shopping.png';
import { FaGithub } from 'react-icons/fa';
import { useStateValue } from '../../StateProvider';
import Carousel from './../carousel/Carousel';
import youtubeCloneimg from '../../assets/Снимок экрана (84).png'
import toys from '../../assets/Снимок экрана (86).png'

const Portfel = () => {

    const [dark] = useStateValue();

    return (
        <div id="portfolio" className={!dark.dark ? classes.portfolio : classes.portLight}>
            <h3>My Portfolio</h3>
            <div className={classes.portfolio_box}>
                <div className={classes.portfolio_card2}>
                    <img src={cart} alt={cart} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using React</h4>
                        <a href="https://add-to-cart.vercel.app/cart" target="/_blank">
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
                    <img src={shopping} alt={shopping} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using React</h4>
                        <a href="https://shopping-cart-one-iota.vercel.app/" target="/_blank">View Project</a>
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
                        <h4>This project was built using React</h4>
                        <a href="#portfolio" target="/_blank">View Project</a>
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
                    <img src="https://valenteshop.ru/uploads/f87cfe63c37d500aed93d61845d50bee.jpg" alt={City} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using React</h4>
                        <a href="https://weathet-app.vercel.app/" target="/_blank">View Project</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.portfolio_card1}>
                    <img src={youtubeCloneimg} alt={youtubeCloneimg} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using React</h4>
                        <a href="https://cranky-thompson-5e79af.netlify.app" target="/_blank">View Project</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.portfolio_card1}>
                    <img src={toys} alt={toys} />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using React</h4>
                        <a href="https://therepublic.vercel.app/" target="/_blank">View Project</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel />
        </div>
    )
}

export default Portfel;