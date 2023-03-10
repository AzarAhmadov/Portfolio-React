import { Nav } from '../data/Data'
import { useContext, useEffect, useState } from 'react';
import { globalContext } from '../context/Context';
import { useRef } from 'react';

const MobilMenu = () => {
    const { mode, setMode } = useContext(globalContext)
    const [active, setActive] = useState(false)

    const mobil = useRef()

    return (
        <div ref={mobil} className='mobil-menu'>
            <div className={active ? 'mobil-list active' : 'mobil-list'}>
                <ul>
                    {
                        Nav.map((el, idx) => {
                            return (
                                <li key={idx}>
                                    <a className='d-flex align-items-center flex-column' onClick={() => setActive(!active)} href={el.path}>
                                        {el.icon}
                                        {el.text}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="mobil-header">
                <span> Azar Ahmadov </span>
                <div className="mobil-right">
                    <button onClick={() => setMode(!mode)} className='dark-mode'> <i style={{ fontSize: "30px" }} className={mode ? 'bx bx-sun' : "bx bx-moon"}></i> </button>
                    <i style={{ fontSize: "32px" }} onClick={() => setActive(!active)} className={active ? "bx bx-x" : 'bx bx-grid-alt'}></i>
                </div>
            </div>
        </div >
    );
}

export default MobilMenu;
