import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PortfolioCards({ elem }) {
    return (
        <div className='portfolio-item'>
            <div className="portfolio-img">
                <LazyLoadImage src={elem.img}
                    alt="Image Alt"
                />
            </div>
            <span className="portfolio-name">{elem.name}</span>
            <div className="links">
                <a target='_blank' href={elem.github}> Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i> </a>
                <a target='_blank' href={elem.demo}> Preview <i className="fa-solid fa-chevron-right"></i> </a>
            </div>
        </div>
    )
}
