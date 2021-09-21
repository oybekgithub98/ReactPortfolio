import React, {useState} from 'react';
import './Theme.css';
import { FaCog } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

const Theme = () => {
    const [hendTheme, setHendTheme] = useState(false)

    const handleTheme = (e) => {
        const theme = document.querySelector('.theme');
        if( !hendTheme) {
            theme.classList.add('activeTheme')
            setHendTheme(true)
        } else {
            theme.classList.remove('activeTheme')
            setHendTheme(false)
        }

    }


    return (
        <div className="theme">
            <div className="theme_icons">
                <div className="icon spinner" onClick={handleTheme}>
                    <FaCog style={{ fontSize: "33px" }} className="facogIcon" />
                </div>
                <div className="icon">
                    <FiSun style={{ fontSize: "33px" }} />
                </div>
            </div>
            <div className="theme_color">
                <h3>Theme colors</h3>
                <div className="theme_colors">
                    <div className="color1"></div>
                    <div className="color2"></div>
                    <div className="color3"></div>
                    <div className="color4"></div>
                    <div className="color5"></div>
                </div>
            </div>
        </div>
    )
}

export default Theme
