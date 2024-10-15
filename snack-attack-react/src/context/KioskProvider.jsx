import { createContext, useState } from "react"
import { categories } from "../data/categories"

const KioskContext = createContext()

const KioskProvider = ({ children }) => {

    return (
        <KioskContext.Provider
            value={{

            }}>
                {children}
        </KioskContext.Provider>
    )
}

export { KioskProvider }
export default KioskContext
