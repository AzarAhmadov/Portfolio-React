import React, { useRef } from 'react';
import { Nav } from './data/Data';
import { useContext } from 'react';
import { globalContext } from './context/Context';

const Header = () => {

    const { mode, setMode } = useContext(globalContext)

    const header = useRef();

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            header.current.style.top = "0";
        } else {
            header.current.style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <header ref={header}>
            <div style={{ width: '100%' }}>
                <div className='container'>
                    <div className="row h-row">
                        <div className="col-5 h-col-left">
                            <span> Azar Ahmadov </span>
                        </div>
                        <div className="col-7 h-col-right d-flex justify-content-end">
                            <nav id='navbar'>
                                <ul className='d-flex' id='nav-list'>
                                    {
                                        Nav.map((item, index) => {
                                            return (
                                                <li key={index} className='nav-item'> <a className='nav-link' href={item.path}> {item.text} </a> </li>
                                            )
                                        })
                                    }
                                    <button onClick={() => setMode(!mode)} className='dark-mode'> <i style={{ fontSize: "30px" }} className={mode ? 'bx bx-sun' : "bx bx-moon"}></i></button>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
