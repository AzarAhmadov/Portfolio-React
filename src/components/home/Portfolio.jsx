import React, { useState, useEffect } from 'react';
import { portfolio } from '../data/Data';
import Aos from 'aos';
import PortfolioCards from './PortfolioCards';

const Portfolio = () => {
    const [item, setItem] = useState(portfolio);

    const [active, setActive] = useState(0)

    const filterItem = (categoryItem) => {
        const update = portfolio.filter((curElem) => {
            return curElem.category === categoryItem
        })
        setItem(update)
    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section id='portfolio'>
            <div data-aos='fade-up' className="titles text-center">
                <h3> Most Recent Work </h3>
                <h2> Portfolio </h2>
            </div>

            <div data-aos='fade-up' className="potfolio-row">
                <div className="portfolio-top-btns">
                    <div onClick={() => setItem(portfolio)} className="btns">
                        <button onClick={() => setActive(0)} className={active === 0 ? 'active' : null}>All</button>
                    </div>
                    <div onClick={() => filterItem('html')} className="btns">
                        <button onClick={() => setActive(1)} className={active === 1 ? 'active' : null}>Html & Bootstrap</button>
                    </div>
                    <div onClick={() => filterItem('react')} className="btns">
                        <button onClick={() => setActive(2)} className={active === 2 ? 'active' : null}>React JS</button>
                    </div>
                </div>
                <div className='portfolio-grid'>
                    {
                        item.map((elem, index) => {
                            return (
                                <PortfolioCards elem={elem} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
