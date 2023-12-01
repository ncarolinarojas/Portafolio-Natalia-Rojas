import '../Footer/styles.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <div className='container-footer'>
            <div className='container-redes'>
                <div>
                    <a href='https://www.linkedin.com/in/natalia-rojas-388418232/' target="_blank"> <CiLinkedin className='redes' /></a>
                </div>
                <div>
                    <a href='https://github.com/ncarolinarojas' target="_blank"> <FaGithub className='redes' /></a>
                </div>
                <div>
                <a href="mailto:nataliarojasco22@gmail.com?subject=Deseo contactarte!"> <SiGmail className='redes' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer