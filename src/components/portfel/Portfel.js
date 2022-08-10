import React from 'react';
import classes from './Portfel.module.css';
import Quran from '../../assets/quron-audios.png';
import Diskount from '../../assets/diskount.png';
import City from '../../assets/city.jpg';
import cart from '../../assets/cart.png';
import shopping from '../../assets/shopping.png';
import { FaGithub } from 'react-icons/fa';
import { useStateValue } from '../../StateProvider';
import Carousel from './../carousel/Carousel';
import youtubeCloneimg from '../../assets/Снимок экрана (84).png';
import toys from '../../assets/Снимок экрана (86).png';
import { useTranslation } from 'react-i18next';

const Portfel = () => {

    const [dark] = useStateValue();
    const { t } = useTranslation();


    return (
        <div id="portfolio" className={!dark.dark ? classes.portfolio : classes.portLight}>
            <h3>{t("portfolio")}</h3>
            <div className={classes.portfolio_box}>
                <div className={classes.portfolio_card2}>
                    <img src={Diskount} alt={Diskount} />
                    <div className={classes.card_overlay}>
                        <h4>{t("card_overlay")}</h4>
                        <a href="https://diskount.techdatasoft.uz/" target="/_blank">{t("View_Project")}</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>{t("overlay_github")}</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.portfolio_card1}>
                    <img src={toys} alt={toys} />
                    <div className={classes.card_overlay}>
                        <h4>{t("card_overlay")}</h4>
                        <a href="https://therepublic.vercel.app/" target="/_blank">{t("View_Project")}</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>{t("overlay_github")}</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.portfolio_card1}>
                    <img src="https://valenteshop.ru/uploads/f87cfe63c37d500aed93d61845d50bee.jpg" alt={City} />
                    <div className={classes.card_overlay}>
                        <h4>{t("card_overlay")}</h4>
                        <a href="https://weathet-app.vercel.app/" target="/_blank"> {t("View_Project")}</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>{t("overlay_github")}</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                



            </div>
            <div className={classes.portfolio_box}>
                <div className={classes.portfolio_card2}>
                    <img src={shopping} alt={shopping} />
                    <div className={classes.card_overlay}>
                        <h4>{t("card_overlay")}</h4>
                        <a href="https://shopping-cart-one-iota.vercel.app/" target="/_blank"> {t("View_Project")}</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>{t("overlay_github")}</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* <div className={classes.portfolio_card1}>
                    <img src={youtubeCloneimg} alt={youtubeCloneimg} />
                    <div className={classes.card_overlay}>
                        <h4>{t("card_overlay")}</h4>
                        <a href="https://cranky-thompson-5e79af.netlify.app" target="/_blank">{t("View_Project")}</a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>{t("overlay_github")}</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div> */}
                {/* <div className={classes.portfolio_card2}>
                    <img src={cart} alt={cart} />
                    <div className={classes.card_overlay}>
                        <h4>{t("card_overlay")}</h4>
                        <a href="https://add-to-cart.vercel.app/cart" target="/_blank">
                            {t("View_Project")}
                        </a>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>{t("overlay_github")}</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div> */}

            </div>
            <Carousel />
        </div>
    )
}

export default Portfel;