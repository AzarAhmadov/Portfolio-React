import React, { useEffect } from 'react';
import MyResume from '../cv/AzarAhmadov(cv).pdf'
import Aos from 'aos';

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section id='about'>
            <div data-aos="fade-up" className="titles text-center">
                <h3> Get To Know </h3>
                <h2> About Me </h2>
            </div>
            <div className="container">
                <div className="row about-row">
                    <div className="col-lg-6 about-col-left">
                        <div data-aos="fade-right" className="about-left-item">
                            <img src="../images/about.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 about-col-right">
                        <div data-aos="fade-left" className="about-right-item">
                            <p className='about-text'>
                                I am living in Baku. I like Information technologies and search Informasion technologies. I am open to new things and I like to work on myself. I am very hardworking.
                            </p>
                            <ul>
                                <li>2 + <br />  <span> Experience </span></li>
                                <li>46 + <br /> <span> Project </span></li>
                                <li>7 + <br />  <span> Orders </span></li>
                            </ul>
                            <a className='global-button' download href={MyResume}> My Cv <i className="fa-solid fa-download"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
