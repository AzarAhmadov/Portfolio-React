import React from 'react'

export default function PortfolioCards({ elem }) {
    return (
        <div className='portfolio-item'>
            <div className="portfolio-img">
                <img src={elem.img} alt="" />
            </div>
            <span className="portfolio-name">{elem.name}</span>
            <div className="links">
                <a target='_blank' href={elem.github}> Github </a>
                <a target='_blank' href={elem.demo}> Demo </a>
            </div>
        </div>
    )
}
