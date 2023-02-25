import React, { useEffect } from 'react';
import Aos from 'aos';
const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section id='banner'>
            <div className="container">
                <div className="row banner-row">
                    <div className="col-lg-6  banner-left-col">
                        <div className="banner-left-item">
                            <div className="sosial-icons">
                                <a href="https://github.com/AzarAhmadov" target='_blank'> <i className="fa-brands fa-github"></i> </a>
                                <a href="https://www.linkedin.com/in/azar-ahmadov-87a559210/" target='_blank'> <i className="fa-brands fa-linkedin-in"></i> </a>
                                <a href="https://api.whatsapp.com/send?phone=9940558210637" target='_blank'> <i className="fa-brands fa-whatsapp"></i> </a>
                            </div>
                            <div data-aos='fade-left' className="right-text">
                                <h1 className='title'> Hi, I'm Azar Ahmadov </h1>
                                <span className='work'> Front-end developer </span>
                                <small className='work-text'>
                                    I have a lot of knowledge and experience <br /> in this field
                                </small>
                                <a className='global-button' href="https://api.whatsapp.com/send?phone=9940558210637"> Contact me  <i className="fa-regular fa-id-badge"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 banner-right-col d-flex justify-content-center">
                        <div data-aos='fade-right' className="banner-right-item">
                            <img src="../images/banner.png" alt="banner" className="banner-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;
