import React from 'react';
import classes from './Services.module.css';
import { FaLaptopCode, FaImage, FaPhotoVideo, FaAt } from 'react-icons/fa';
import { useStateValue } from '../../StateProvider';

const Services = () => {

    const [dark, dispatch] = useStateValue();
    // console.log(dark, dispatch);

    return (
        <div id="services" className={! dark.dark ? classes.services : classes.servicesLight}>
            <h3>Servicees</h3>
            <div className={classes.services_box}>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaLaptopCode style={{fontSize: "60px"}} />
                    </div>
                    <h3>Web deisgn</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaImage style={{fontSize: "60px"}} />
                    </div>
                    <h3>Photography</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaPhotoVideo style={{fontSize: "60px"}} />
                    </div>
                    <h3>Web deisgn</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
            </div>
            <div className={classes.services_box}>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaPhotoVideo style={{fontSize: "60px"}} />
                    </div>
                    <h3>Video Editing</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaLaptopCode style={{fontSize: "60px"}} />
                    </div>
                    <h3>Web deisgn</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
                <div className={classes.services_card}>
                    <div className={classes.services_icons}>
                        <FaAt style={{fontSize: "60px"}} />
                    </div>
                    <h3>Web deisgn</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
