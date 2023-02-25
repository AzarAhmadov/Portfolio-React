import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function PortfolioCards({ elem }) {
    return (
        <div className='portfolio-item'>
            <LazyLoadImage src={elem.img}>
            </LazyLoadImage>
            <span className="portfolio-name">{elem.name}</span>
            <div className="links">
                <a target='_blank' href={elem.github}> Github </a>
                <a target='_blank' href={elem.demo}> Demo </a>
            </div>
        </div>
    )
}
