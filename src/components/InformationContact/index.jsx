import '../InformationContact/information.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const InformationContact = () => {
    return (
        <div className='container-info'>
            <h2>Information contact</h2>
            <p>But, if you prefer you can connect me through these means</p>
            <div>
                <p>You can send me a message on LinkedIn</p>
                <a href='https://www.linkedin.com/in/natalia-rojas-388418232/' target="_blank"> <CiLinkedin className='redes' /></a>
            </div>
            <div>
                <p>You can see the codes of my projects</p>
                <a href='https://github.com/ncarolinarojas' target="_blank"> <FaGithub className='redes' /> </a>
            </div>
            <div>
                <p>You can send me a email</p>
                <a href="mailto:nataliarojasco22@gmail.com?subject=Deseo contactarte!"> <SiGmail className='redes' /> </a>
            </div>
        </div>
    )
}

export default InformationContact