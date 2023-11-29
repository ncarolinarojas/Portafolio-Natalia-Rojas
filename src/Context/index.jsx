import { createContext, useState } from "react";

export const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {

    const [information, setInformation] = useState({
        fullname: "Natalia Rojas",
        career: "FullStack Developer",
        tel: "+57 3226611765",
        email: "nataliarojasco22@gmail.com",
        location: "Colombia"
    })

    return (
        <PortfolioContext.Provider
            value={{
                information,
                setInformation
            }}
        >
            {children}
        </PortfolioContext.Provider>
    )
}