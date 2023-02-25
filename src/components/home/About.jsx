import React, { useEffect, useState } from 'react';
import { isVisible } from "@testing-library/user-event/dist/utils";
import MyResume from '../cv/AzarAhmadov(cv).pdf'
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import Aos from 'aos';

const About = ({ className, ...rest }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const [viewPortEntered, setViewPortEntered] = useState(false);

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
                            <div className='about-text'>
                                I am living in Baku. I like Information technologies and search Informasion technologies. I am open to new things and I like to work on myself. I am very hardworking.
                            </div>
                            <ul>
                                <li>
                                    <span className='d-flex flex-column' data-number="2">
                                        <CountUp {...rest} start={viewPortEntered ? null : 0} end={2}>
                                            {({ countUpRef }) => {
                                                return (
                                                    <ReactVisibilitySensor
                                                        active={!viewPortEntered}
                                                        onChange={(isVisible) => {
                                                            if (isVisible) {
                                                                setViewPortEntered(true);
                                                            }
                                                        }}
                                                        delayedCall
                                                    >
                                                        <small className="number num" ref={countUpRef} />
                                                    </ReactVisibilitySensor>
                                                );
                                            }}
                                        </CountUp>
                                        <strong>
                                            Experience
                                        </strong>
                                    </span>
                                </li>
                                <li>
                                    <span className='d-flex flex-column' data-number="55">
                                        <CountUp {...rest} start={viewPortEntered ? null : 0} end={55}>
                                            {({ countUpRef }) => {
                                                return (
                                                    <ReactVisibilitySensor
                                                        active={!viewPortEntered}
                                                        onChange={(isVisible) => {
                                                            if (isVisible) {
                                                                setViewPortEntered(true);
                                                            }
                                                        }}
                                                        delayedCall
                                                    >
                                                        <small className="number" ref={countUpRef} />
                                                    </ReactVisibilitySensor>
                                                );
                                            }}
                                        </CountUp>
                                        <strong>
                                            Project
                                        </strong>
                                    </span>
                                </li>
                                <li>
                                    <span className='d-flex flex-column' data-number="7">
                                        <CountUp {...rest} start={viewPortEntered ? null : 0} end={7}>
                                            {({ countUpRef }) => {
                                                return (
                                                    <ReactVisibilitySensor
                                                        active={!viewPortEntered}
                                                        onChange={(isVisible) => {
                                                            if (isVisible) {
                                                                setViewPortEntered(true);
                                                            }
                                                        }}
                                                        delayedCall
                                                    >
                                                        <small className="number" ref={countUpRef} />
                                                    </ReactVisibilitySensor>
                                                );
                                            }}
                                        </CountUp>
                                        <strong>
                                            Orders
                                        </strong>
                                    </span>
                                </li>
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
