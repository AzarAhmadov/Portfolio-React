import { createContext, useState } from "react";
export const globalContext = createContext();


const GlobalContextProvider = ({ children }) => {

    const [mode, setMode] = useState(false)

    if (mode === true) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }

    const values = {
        mode,
        setMode,
    }

    return (
        <globalContext.Provider value={values}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContextProvider