import React, { useState } from 'react';
import classes from './About.module.css';
import { useStateValue } from '../../StateProvider';


const About = () => {
    const [dark] = useStateValue();

    const [experienc, SetExperienc] = useState(false);


    const education1 = () => {
        const Education = document.getElementById('Education');
        const Experience = document.getElementById('Experience');

        Education.style.color = 'coral';
        Experience.style.color = 'grey';
        SetExperienc(true)
        
    }

    const education2 = () => {
        const Education = document.getElementById('Education');
        const Experience = document.getElementById('Experience');

        Education.style.color = 'grey';
        Experience.style.color = 'coral';
        SetExperienc(false);
    }


    return (
        <div id="about" className={!dark.dark ? classes.about : classes.aboutLight}>
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
                        <span>90%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>CSS</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress2}>

                            </div>
                        </div>
                        <span>85%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>BOOTSTRAP</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress3}>

                            </div>
                        </div>
                        <span>85%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>JAVASCRIPT</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress4}>

                            </div>
                        </div>
                        <span>75%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>REACT.JS</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress5}>

                            </div>
                        </div>
                        <span>72%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>Material UI</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress6}>

                            </div>
                        </div>
                        <span>75%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>Git</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress7}>

                            </div>
                        </div>
                        <span>89%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>React Icons</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress8}>

                            </div>
                        </div>
                        <span>92%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>Firebase</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress9}>

                            </div>
                        </div>
                        <span>75%</span>
                    </div>
                    <div className={classes.skills_items}>
                        <span className={classes.skillsName}>API</span>
                        <div className={classes.skills_parent}>
                            <div className={classes.skills_progress10}>

                            </div>
                        </div>
                        <span>80%</span>
                    </div>
                </div>
                <div className={classes.experience}>
                    <div className={classes.experience_items}>
                        <h3 id="Education" onClick={education1}>Education</h3>
                        <h3 id="Experience" onClick={education2}>Experience</h3>
                    </div>

                    {
                        experienc ?
                            <div className={classes.experience_box}>
                                <div className={classes.card}>
                                    <h3>2018 - 2019</h3>
                                    <h2>Namangan viloyati Norin tumani </h2>
                                    <p> Aperiam deserunt officia ratione quibusdam magni quos est facere repellendus dolor, cumque modi ullam totam? Tenetur reiciendis accusamus ullam suscipit ipsa officiis in esse laudantium enim, laborum, voluptatum molestias sapiente rerum impedit</p>
                                </div>
                                <div className={classes.card}>
                                    <h3>2019 - 2020</h3>
                                    <h2>Namangan viloyati Norin tumani</h2>
                                    <p> Voluptas laudantium minus consectetur rerum fugiat mollitia, exercitationem atque assumenda consequatur Velit quos laboriosam eligendi hic sapiente tempore ipsam dolores asperiores rerum repudiandae eaque vitae tenetur consequatur reprehenderit rem</p>
                                </div>
                                <div className={classes.card}>
                                    <h3>2020 - 2021</h3>
                                    <h2>Namangan viloyati Norin tumani </h2>
                                    <p>Blanditiis soluta, eius quod assumenda dolorem, sunt id sequi ex fugiat ipsa adipisci odio. Amet culpa esse neque consequatur Velit quos laboriosam eligendi hic sapiente tempore ipsam dolores asperiores rerum repudiandae eaque vitae tenetur</p>
                                </div>
                            </div>
                            :
                            <div className={classes.experience_box}>
                                <div className={classes.card}>
                                    <h3>2004 - 2012</h3>
                                    <h2>Namangan viloyati Norin tumani 18-sonli maktab o'qiganman</h2>
                                    <p>Veniam expedita dolor, omnis minus exercitationem dolorem atque quo repellendus optio tenetur cumque molestiae aliquid nam suscipit, error sint aspernatur perspiciatis voluptatibus ea ad doloribus enim molestias ducimus.</p>
                                </div>
                                <div className={classes.card}>
                                    <h3>2013 - 2016</h3>
                                    <h2>Namangan viloyati Norin tumani MET Kollejda o'qiganman</h2>
                                    <p>Mollitia voluptas cupiditate eligendi praesentium consequuntur repellendus commodi illo necessitatibus quas perspiciatis architecto delectus, dicta dolore hic repellat rerum, illum alias cumque amet quaerat saepe explicabo omnis.</p>
                                </div>
                                <div className={classes.card}>
                                    <h3>2017 - 2018</h3>
                                    <h2>Namangan viloyati Norin tumani ish organish</h2>
                                    <p>Tempore adipisci enim illum nisi porro, aliquid earum ipsa quasi delectus impedit possimus harum sapiente animi vitae minima quae quisquam ex incidunt ipsam totam placeat modi!</p>
                                </div>
                            </div>
                    }

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
