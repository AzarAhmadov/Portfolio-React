import React from 'react';
import { Nav } from './data/Data';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-item">
                        <div className="footer-inner-item">
                            <h4 className="footer-title">
                                Azar Ahmadov
                            </h4>
                            <p className="simple-footer">
                                Front end developer
                            </p>
                        </div>
                        <div className="footer-list">
                            <ul className="list-footer">
                                {
                                    Nav.map((item, index) => {
                                        return (
                                            <li key={index} className='nav-item'> <a href={item.path}> {item.text} </a> </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="sosial-icon">
                            <a href="https://github.com/AzarAhmadov" target="_blank"> <i className="fab fa-github"></i> </a>
                            <a href="https://www.linkedin.com/in/azar-ahmadov-87a559210" target="_blank"> <i className="fab fa-linkedin"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=9940558210637" target="_blank"> <i className="fab fa-whatsapp"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
