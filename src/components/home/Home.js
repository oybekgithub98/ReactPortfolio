import React from 'react';
import Figure1 from '../animation/figure1/Figure1';
import Figure2 from '../animation/figure2/Figure2';
import TypingEffect from 'new-react-typing-effect';
import homeImage from '../../assets/f934535398f235346dbe6466790a913f.jpg';
// import { FaCog } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { useStateValue } from '../../StateProvider';
import './Home.css';

const Home = () => {
    const [dark, dispatch] = useStateValue();

    const shareDarkMode = () => {
        dispatch({
            type: "SET_DARK",
            dark: !dark.dark
        })

        if (localStorage.getItem('theme') === "light") {
            localStorage.setItem('theme', "dark")
        }
        else {
            localStorage.setItem('theme', "light")
        }
    }

    return (
        <div id="home" className={!dark.dark ? "home" : "homeLight"}>
            <div className="home_wrapper">
                <Figure1 />
                <div className="home_body">
                    <div className="home_body_content">
                        <p>I am</p>
                        <p>Soginboyev Oybek</p>
                        <div className="home_typing">
                            <p>I'm a

                            </p>
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
                            <button>More About Me</button>
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
                    <FiSun style={{ fontSize: "33px" }} />
                </div>
            </div>
            
        </div>
    )
}

export default Home
