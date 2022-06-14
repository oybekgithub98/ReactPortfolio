import React, {useState, useEffect} from 'react';
import classes from './Contact.module.css';
import contactImage from '../../assets/contact-image.png';
import { useStateValue } from '../../StateProvider';
import { useForm } from "react-hook-form";

const Contact = () => {

    const [dark] = useStateValue();
    const [opencontact, setOpencontact] = useState(false);
    

    const sendContent = (e) => {
        setOpencontact(!opencontact);
    }

    useEffect(()=>{
        const body = document.body
        if(opencontact){
          body.style.overflow = "hidden"
        } else {
          body.style.overflow = "visible"
        }
      }, [opencontact])

      const {
          register,
          formState: {
              errors,
          },
          handleSubmit,
          reset,
      } = useForm({
          mode: "onBlur"
      });

      const onSubmit = (data) => {
          alert(JSON.stringify(data))
          reset();
      }

    return (
        <div id="contact" className={!dark.dark ? classes.contact : classes.contactLight}>
            <h3>Contact</h3>
            <div className={classes.contact_wrapper}>
                <div className={classes.contact_image}>
                    <img src={contactImage} alt="" />
                </div>
                <div className={classes.contact_form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            {...register("FirstName", {
                                required: "Iltimos bo'sh joyni to'ldiring 👆",
                                minLength: {
                                    value: 5,
                                    message: "minimum 5 xarf"
                                }
                                
                            })}
                            placeholder="First Name"
                        />
                        <div style={{height: 20}}>{errors?.FirstName && <p style={{color: "red"}}>{errors?.FirstName?.message || "Error!"}</p>}</div>
                        <input 
                            {...register("LastName", {
                                required: "Iltimos bo'sh joyni to'ldiring 👆",
                                minLength: {
                                    value: 5,
                                    message: "minimum 5 xarf"
                                }
                                
                            })}
                            placeholder="Last Name"
                        />
                        <div style={{height: 20}}>{errors?.LastName && <p style={{color: "red"}}>{errors?.LastName?.message || "Error!"}</p>}</div>
                        <input type="email" 
                            {...register("email", {
                                required: "Iltimos bo'sh joyni to'ldiring 👆",
                            })}
                            placeholder="Email"
                        />
                        <div style={{height: 20}}>{errors?.email && <p style={{color: "red"}}>{errors?.email?.message || "Error!"}</p>}</div>
                        <input type="password"
                            {...register("password", {
                                required: "Iltimos bo'sh joyni to'ldiring 👆",
                                minLength: {
                                    value: 8,
                                    message: "minimum 8"
                                }
                            })}
                            placeholder="Password"
                        />
                        <div style={{height: 20}}>{errors?.password && <p style={{color: "red"}}>{errors?.password?.message || "Error!"}</p>}</div>
                        <input type="submit" />
                    </form>
                    {/* <button type="submit" >Send Massage</button> */}

                    <div className={ opencontact ? classes.activeContactOpen : classes.contactOpen} onClick={() => setOpencontact(false)}>
                        <div className={classes.contactOpen_wrapper}>
                            <img src="https://therepublicoftoys.uz/img/home/check.png" alt="" />
                            <h1 className='child'>
                                Jo'natildi
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;