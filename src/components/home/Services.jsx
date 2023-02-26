import React, { useEffect } from 'react';
import Aos from 'aos';

const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section data-aos='fade-up' id='services'>
            <div className="titles text-center">
                <h3>what i offer </h3>
                <h2> Services </h2>
            </div>
            <div className="container">
                <div className="row services-row">
                    <div className="col-lg-4">
                        <div className="card-item">
                            <i className="fa-solid fa-globe"></i>
                            <h5> Web Development </h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card-item">
                            <i className='bx bxs-devices'></i>
                            <h5> Responsive Friendly  </h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card-item">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <h5> Seo Optimization </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
