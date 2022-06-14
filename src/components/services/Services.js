import React from 'react';
import classes from './Services.module.css';
import { FaLaptopCode, FaImage, FaPhotoVideo, FaAt } from 'react-icons/fa';
import { useStateValue } from '../../StateProvider';
import { useTranslation } from 'react-i18next';

const Services = () => {

    const [dark] = useStateValue();
    const { t } = useTranslation()

    return (
        <div id="services" className={! dark.dark ? classes.services : classes.servicesLight}>
            <h3>{t("servicees")}</h3>
            <div className={classes.services_box}>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaLaptopCode style={{fontSize: "60px"}} />
                    </div>
                    <h3>{t("services_icon1_h3")}</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaImage style={{fontSize: "60px"}} />
                    </div>
                    <h3>{t("photography")}</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaPhotoVideo style={{fontSize: "60px"}} />
                    </div>
                    <h3>{t("services_icon1_h3")}</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
            </div>
            <div className={classes.services_box}>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaPhotoVideo style={{fontSize: "60px"}} />
                    </div>
                    <h3>{t("video_Editing")}</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaLaptopCode style={{fontSize: "60px"}} />
                    </div>
                    <h3>{t("services_icon1_h3")}</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaAt style={{fontSize: "60px"}} />
                    </div>
                    <h3>{t("services_icon1_h3")}</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
