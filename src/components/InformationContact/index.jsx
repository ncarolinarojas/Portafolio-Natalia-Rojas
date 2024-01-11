import '../InformationContact/information.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const InformationContact = () => {
    return (
        <div className='container-info container'>
            <h2 className='text-center'>Information contact</h2>
            <p className='text-center'>But, if you prefer you can connect me through these means</p>
            <div className='row'>
                <div className='col-12'>
                    <p>You can send me a message on LinkedIn</p>
                    <a href='https://www.linkedin.com/in/natalia-rojas-388418232/' target="_blank" className='d-flex justify-content-center'> <CiLinkedin className='redes' /></a>
                </div>
                <div className='col-12'>
                    <p>You can see the codes of my projects</p>
                    <a href='https://github.com/ncarolinarojas' target="_blank" className='d-flex justify-content-center'> <FaGithub className='redes' /> </a>
                </div>
                <div className='col-12'>
                    <p>You can send me an email</p>
                    <a href="mailto:nataliarojasco22@gmail.com?subject=Deseo contactarte!" className='d-flex justify-content-center'> <SiGmail className='redes' /> </a>
                </div>
            </div>
        </div>
    )
}

export default InformationContact;
