import '../ButtonHome/style.css'
import {Link} from 'react-router-dom'

const ButtonHome = () => {
    return(
        <div className='container1'>
            <div className='container'>
                <Link to={'/projects'}>
                <button className='button'>
                    Check my projects!!
                </button>
                </Link>
            </div>
        </div>
    )
}

export default ButtonHome