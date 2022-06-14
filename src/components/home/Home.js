import React, { useState } from 'react';
import Figure1 from '../animation/figure1/Figure1';
import Figure2 from '../animation/figure2/Figure2';
import TypingEffect from 'new-react-typing-effect';
import homeImage from '../../assets/f934535398f235346dbe6466790a913f.jpg';
import { FiSun } from 'react-icons/fi';
import { IoIosMoon } from 'react-icons/io';
import { useStateValue } from '../../StateProvider';
import './Home.css';
import SelectLang from '../../lang/SelectLang';
import { useTranslation } from 'react-i18next';
// import { t } from 'i18next';

const Home = () => {
    const [dark, dispatch] = useStateValue();
    const [state, setState] = useState(false);
    const { t } = useTranslation()
    
    console.log(state)
    
    const shareDarkMode = () => {
        const sidebarId = document.getElementById('sidebar_menu');
        dispatch({
            type: "SET_DARK",
            dark: localStorage.getItem('theme') === "light"
        })

        if (localStorage.getItem('theme') === "light") {
            localStorage.setItem('theme', "dark")
            sidebarId.classList.add('activeSidebarId')
            setState(true)

        }
        else {
            localStorage.setItem('theme', "light")
            sidebarId.classList.remove('activeSidebarId')
            setState(false)
        }
    }

    return (
        <div id="home" className={!dark.dark ? "home" : "homeLight"}>
            <div className="home_wrapper">
                <Figure1 />
                <div className="home_body">
                    <div className="home_body_content">
                        <p>{t("i_am")}</p>
                        <p className="homeText">Soginboyev Oybek</p>
                        <div className="home_typing">
                            {/* <p>{t("i_am")}</p> */}
                            <span>
                                <TypingEffect
                                    messages={
                                        [
                                            "Developer",
                                            "Designer",
                                            "Freelancer"
                                        ]
                                    }
                                    cursor="|"
                                    textRenderer={(text, renderedCursor, atIndex) => {
                                        return (
                                            atIndex % 2 === 0 ?
                                                <h2 style={{ color: 'coral' }}>{text}{renderedCursor}</h2> :
                                                <h2 style={{ color: 'coral' }}>{text}{renderedCursor}</h2>
                                        );
                                    }}
                                    cursorRenderer={(cursor) => (
                                        <span style={{ color: 'red' }}>{cursor}</span>
                                    )}
                                    options={{
                                        text: {
                                            charactersPerSecond: 7,
                                            fullTextDelayMS: 2000,
                                            cursorColor: "red",
                                        },
                                    }}
                                />
                            </span>
                        </div>

                        <div className="home_button">
                            <a href="#about"><button>{t("home_button1")}</button></a>
                            <a href="https://github.com/oybekgithub98/reactportfolio" target="/_blank"><button>{t("home_button2")}</button></a>
                        </div>

                        <div className="figure2">
                            <Figure2 />
                            <Figure2 />
                        </div>

                    </div>
                    <div className="home_body_image">
                        <div className="item_image">
                            <img src={homeImage} alt="" />
                        </div>
                        <div className="kub">

                        </div>
                    </div>
                </div>
            </div>

            {/* theme */}
            <div className="theme">
                <div className="icon" onClick={shareDarkMode}>
                    {
                        !dark.dark  ?
                            <FiSun style={{ fontSize: "33px" }} />
                            :
                            <IoIosMoon style={{ fontSize: "33px" }} />
                    }
                </div>
                <div className="language icon">
                    <SelectLang />
                    {/* <select>
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                        <option value="en">Eng</option>
                    </select> */}
                </div>
            </div>
        </div>
    )
}

export default Home;
