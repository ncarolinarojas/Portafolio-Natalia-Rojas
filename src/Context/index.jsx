import { createContext, useState } from "react";
import Shopi from '../assets/Shopi.svg'

export const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {

    const [information, setInformation] = useState([
        {
            project: "Shopi E-commerce",
            url: "https://shopi-e-commerce.netlify.app/",
            image: Shopi,
            tools: ["React", "TailwindCSS", "useContext"]
        },
        {
            project: "Countries APP",
            url: "Por poner",
            image: "por poner",
            tools: ["React", "PostgreSQL", "Sequelize", "Express", "Axios", "Sass"]
        }
    ])

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