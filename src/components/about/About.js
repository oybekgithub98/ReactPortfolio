import React from 'react';
import classes from './About.module.css';
import { useStateValue } from '../../StateProvider';

const About = () => {

    const [dark, dispatch] = useStateValue();
    console.log(dark, dispatch);

    return (
        <div className={!dark.dark ? classes.about : classes.aboutLight}>
            <h3>About Me</h3>
            <div className={classes.about_wrapper}>
                <div className={classes.skills}>
                    <h3>My Skills</h3>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>HTML</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress1}>

                            </div>
                        </div>
                        <span>85%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>CSS</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress2}>

                            </div>
                        </div>
                        <span>78%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>BOOTSTRAP</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress3}>

                            </div>
                        </div>
                        <span>75%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>JAVASCRIPT</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress4}>

                            </div>
                        </div>
                        <span>60%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>REACT.JS</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress5}>

                            </div>
                        </div>
                        <span>52%</span>
                    </div>
                </div>
                <div className={classes.experience}>
                    <div className={classes.experience_items}>
                        <h3>Education</h3>
                        <h3>Education</h3>
                    </div>
                    <div className={classes.experience_box}>
                        <div className={classes.card}>
                            <h3>2007 - 2016</h3>
                            <h2>Namangan viloyati Norin tumani 18-sonli maktab</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni, molestias nemo iusto eos facere.</p>
                        </div>
                        <div className={classes.card}>
                            <h3>2007 - 2016</h3>
                            <h2>Namangan viloyati Norin tumani 18-sonli maktab</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni, molestias nemo iusto eos facere.</p>
                        </div>
                        <div className={classes.card}>
                            <h3>2007 - 2016</h3>
                            <h2>Namangan viloyati Norin tumani 18-sonli maktab</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni, molestias nemo iusto eos facere.</p>
                        </div>
                    </div>
                    <div className={classes.btn}>
                        <button>Download CV</button>
                        <button>Contact me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
