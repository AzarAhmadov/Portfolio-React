import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const successfully = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q8i78mf', 'template_1cueeyl', form.current, 'KvUbFTYqYN_WJ-tjD')
            .then(() => {
                successfully.current.classList.add('active')
                setTimeout(() => {
                    successfully.current.classList.remove('active')
                }, 2000);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id='contact'>
            <div className="titles text-center">
                <h3> Get in Touch </h3>
                <h2> Contact Me </h2>
            </div>
            <div className="container">
                <div className="row contact-row">
                    <div className="col-lg-6 contact-col-left">
                        <div className="contact-left-item">
                            <ul className='d-flex flex-column'>
                                <li className='d-flex align-items-start'>
                                    <i className="fa-solid fa-phone-volume"></i>
                                    <li> Mobil <br /> <span>994+ 0558210637</span> </li>
                                </li>
                                <li className='d-flex align-items-start'>
                                    <i className="fa-regular fa-envelope"></i>
                                    <li> Mail <br /> <span>azerehmedohv111@gmail.com</span> </li>
                                </li>
                                <li className='d-flex align-items-start'>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <li> Location <br /> <span>Azerbaijan / Baku</span> </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-start contact-col-right">
                        <div className="contact-right-item">
                            <form ref={form} onSubmit={sendEmail}>
                                <input required type="text" name='user_name' placeholder='Your Full Name' />
                                <input required type="email" name='user_email' placeholder='Your Email' />
                                <textarea required name="message" placeholder='Your Message' cols="30" rows="8"></textarea>
                                <button type='submit' className='global-button'> Send <i className="fa-regular fa-paper-plane"></i> </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div ref={successfully} className="successfully">
                    <span> <i className='bx bx-check'></i> message sent </span>
                </div>
            </div>
        </section>
    );
}

export default Contact;
