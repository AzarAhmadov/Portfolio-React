import React, { useRef, useEffect } from 'react'

export default function UpBtn() {

    const mybutton = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                mybutton.current.classList.add('active')
            } else {
                mybutton.current.classList.remove('active')
            }
        });
    }, []);

    const getTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <button onClick={getTop} ref={mybutton} id="myBtn"><i style={{ fontSize: "23px" }} className="fa-solid fa-arrow-up"></i></button>
        </>
    )
}
