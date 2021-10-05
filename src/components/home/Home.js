import React, { useState, useEffect } from 'react';
import Figure1 from '../animation/figure1/Figure1';
import Figure2 from '../animation/figure2/Figure2';
import TypingEffect from 'new-react-typing-effect';
import homeImage from '../../assets/f934535398f235346dbe6466790a913f.jpg';
import { FiSun } from 'react-icons/fi';
import { IoIosMoon } from 'react-icons/io';
import { useStateValue } from '../../StateProvider';
import './Home.css';
import { TimelineLite } from 'gsap';

const Home = () => {
    const [dark, dispatch] = useStateValue();
    const gp = new TimelineLite()
    const [state, setState] = useState(false);
    console.log(state)
    
    useEffect(() => {
        gp
            .from('.theme', { duration: 1, y: '-200px', ease: 'bounse', delay: 0.7, rotation: '360' })
            .from('.I_am', { duration: 1, x: '-200px', delay: 0.7 })
            .from('.homeText', { duration: 1, x: '-500px', delay: 0.7 })
    }, [])

   

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
                        <p className="I_am">I am</p>
                        <p className="homeText">Soginboyev Oybek</p>
                        <div className="home_typing">
                            <p>I'm a</p>
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
                            <button >More About Me</button>
                            <button>Portfolio</button>
                        </div>

                        <div className="figure2">
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
            </div>

        </div>
    )
}

export default Home
