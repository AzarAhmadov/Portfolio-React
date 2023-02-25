import React, { useState, useEffect } from 'react';
import Aos from 'aos';

const Exprience = () => {

    const [index, setIndex] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section id='experience'>
            <div data-aos="fade-up" className="titles text-center">
                <h3> My Personal Journey </h3>
                <h2> Qualification </h2>
            </div>

            <div data-aos="fade-up" className="container">
                <div className="row experience-row">
                    <div className="experience-top">
                        <button className={index ? "" : 'active'} onClick={() => setIndex(0)}> <i className="fa-solid fa-building-columns"></i> Education </button>
                        <button className={index ? "active" : ''} onClick={() => setIndex(1)}> <i className="fa-solid fa-display"></i> Career </button>
                    </div>
                    <div hidden={index != 0} className="col-12 experience-col">
                        <div className="experience-item">
                            <span className="year"> 2018 - 2022 </span>
                            <span className="name"> Western Caspian Universty </span>
                            <p className='universty-name'> Computer Enginner </p>
                        </div>
                        <div className="experience-item">
                            <span className="year"> 2007 - 2018 </span>
                            <p className='name'> 163 number of middle school </p>
                        </div>
                    </div>
                    <div hidden={index != 1} className="col-12 experience-col">
                        <div className="experience-item">
                            <span style={{ marginBottom: "10px" }} className="year"> 2023 </span>
                            <p className='experience-txt'>
                                I am an intern as a front-end developer at
                                <a target='_blank' href="https://proton.az/">Proton.az</a>
                                The situation is ongoing
                            </p>
                        </div>
                        <div className="experience-item">
                            <span style={{ marginBottom: "10px" }} className="year"> 2021 - 2022 </span>
                            <p className='experience-txt'>
                                I worked as a Front end developer teacher 2 month at Baku Vocational Training Center
                            </p>
                        </div>
                        <div className="experience-item">
                            <p className='experience-txt'>
                                I worked as a Front end developer in 'Reminant app'
                            </p>
                        </div>
                        <div className="experience-item">
                            <p className='experience-txt'>
                                I created Turkey and other countries web project as "free lancer". Also I have created websites ready for saler
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Exprience;
