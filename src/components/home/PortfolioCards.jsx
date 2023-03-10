import React from 'react'

export default function PortfolioCards({ elem }) {
    return (
        <div className='portfolio-item'>
            <div className="portfolio-img">
                <img src={elem.img} />
            </div>
            <span className="portfolio-name">{elem.name}</span>
            <div className="links">
                <a target='_blank' href={elem.github}> Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i> </a>
                {
                    elem.demoTxt ? <a target='_blank' href={elem.demo}> {elem.demoTxt} <i className="fa-solid fa-chevron-right"></i> </a> : null
                }
            </div>
        </div>
    )
}
