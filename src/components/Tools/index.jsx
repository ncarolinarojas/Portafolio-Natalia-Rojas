import '../Tools/style.css'
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { SiSequelize } from "react-icons/si";

const Tools = () => {
    return (
        <div className='container-tool'>
            <h3 className='title-tool'>Tools</h3>
            <div className='tools'>
                <div>
                    <p>Javascript</p>
                    <IoLogoJavascript />
                </div>
                <div>
                    <p>Node.js</p>
                    <FaNode />
                </div>
                <div>
                    <p>React</p>
                    <FaReact />
                </div>
                <div>
                    <p>PostgreSQL</p>
                    <SiPostgresql />
                </div>
                <div>
                    <p>Bootstrap</p>
                    <RiBootstrapLine />
                </div>
                <div>
                    <p>Sequelize</p>
                    <SiSequelize />
                </div>
            </div>
        </div>
    )
}

export default Tools