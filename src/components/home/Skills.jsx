import React, { useRef, useState, useEffect } from 'react';
import Aos from 'aos';
const Skilss = () => {

    const [index, setIndex] = useState(0)

    const iref = useRef()
    const iref2 = useRef()
    const iref3 = useRef()

    const arrow = () => {
        iref2.current.classList.remove('arrow2')
        iref.current.classList.remove('arrow')
        iref3.current.classList.remove('arrow3')
    }

    const arrow2 = () => {
        iref2.current.classList.add('arrow2')
        iref.current.classList.add('arrow')
        iref3.current.classList.remove('arrow3')
    }

    const arrow3 = () => {
        iref2.current.classList.remove('arrow2')
        iref.current.classList.add('arrow')
        iref3.current.classList.add('arrow3')
    }


    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section id='skills'>
            <div data-aos="fade-up" className="titles text-center">
                <h3> What Skills I Have </h3>
                <h2> Skills </h2>
            </div>
            <div data-aos='fade-up' className="container">
                <div className="row">
                    {/* Frontend start */}
                    <div className="skills-col col-lg-6 d-flex justify-content-center">
                        <div className="skills-item">
                            <div onClick={arrow} className="skills-arrow">
                                <div onClick={() => { setIndex(0) }} className="skills-top">
                                    <div className="skills">
                                        <i className="fa-solid fa-code"></i>  <h4> Frontend developer </h4>
                                    </div>
                                    <i ref={iref} className="fa-solid fa-chevron-up"></i>
                                </div>
                            </div>
                            <div hidden={index != 0} className="progress-area">
                                <div className="progress-items">
                                    <span className='progress-top'> Html 5 <span> 100% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '100%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-items">
                                    <span className='progress-top'> Css3 (Sass, Scss, Less) <span> 100% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '100%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-items">
                                    <span className='progress-top'> JavaScript (Es 6+) <span> 85% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '85%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-items">
                                    <span className='progress-top'> Bootstrap 5 , Tailwind <span> 80% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '80%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-items">
                                    <span className='progress-top'> React js, Jsx, Hooks, <br /> Context-api, Redux-toolkit <span> 90% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '90%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-items">
                                    <span className='progress-top'> Npm, Api, Axios, Fetch, <br /> Json <span> 90% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '90%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Frontend end */}

                    {/* Design start */}
                    <div className="skills-col col-lg-6 d-flex justify-content-center">
                        <div className="skills-item">
                            <div onClick={arrow2} className="skills-arrow">
                                <div onClick={() => { setIndex(1) }} className="skills-top">
                                    <div className="skills">
                                        <i className="fa-solid fa-location-arrow"></i> <h4> Design </h4>
                                    </div>
                                    <i ref={iref2} className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div hidden={index != 1} className="progress-area">
                                <div className="progress-items">
                                    <span className='progress-top'> Adope XD <span> 70% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '70%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-items">
                                    <span className='progress-top'> Adope Fhotoshop <span> 70% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '70%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-items">
                                    <span className='progress-top'> Figma <span> 70% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '70%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Design end */}

                    {/* Tools start */}
                    <div className="skills-col  col-lg-12 d-flex justify-content-center">
                        <div className="skills-item">
                            <div onClick={arrow3} className="skills-arrow">
                                <div onClick={() => { setIndex(2) }} className="skills-top">
                                    <div className="skills">
                                        <i className="fa-solid fa-gear"></i> <h4> Tools </h4>
                                    </div>
                                    <i ref={iref3} className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                            <div hidden={index != 2} className="progress-area">
                                <div className="progress-items">
                                    <span className='progress-top'> Github(Gitbash) <span> 100% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '100%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-items">
                                    <span className='progress-top'> Vercell, Netlify <span> 100% </span> </span>
                                    <div style={{ width: '100%' }} className="progress-bar">
                                        <div style={{ width: '100%' }} className="progress-line">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tools end */}
                </div>
            </div>
        </section>
    );
}

export default Skilss;
