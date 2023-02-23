import { useState } from "react"
import { Nav } from '../data/Data'
import { useContext } from 'react';
import { globalContext } from '../context/Context';

const MobilMenu = () => {
    const { mode, setMode } = useContext(globalContext)
    const [active, setActive] = useState(false)

    return (
        <div className='mobil-menu'>
            {active ? <div className="mobil-list">
                <ul>
                    {
                        Nav.map((el, idx) => {
                            return (
                                <li onClick={() => setActive(!active)} key={idx}>
                                    {el.icon}
                                    <a href={el.path}>{el.text}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div> : null
            }
            <div className="mobil-header">
                <span> Azar Ahmadov </span>
                <div className="mobil-right">
                    <button onClick={() => setMode(!mode)} className='dark-mode'> <i style={{ fontSize: "30px" }} className={mode ? 'bx bx-sun' : "bx bx-moon"}></i> </button>
                    <i style={{ fontSize: "32px" }} onClick={() => setActive(!active)} className={active ? "bx bx-x" : 'bx bx-grid-alt'}></i>
                </div>
            </div>
        </div>
    );
}

export default MobilMenu;
