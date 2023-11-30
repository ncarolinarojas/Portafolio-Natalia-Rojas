import '../Aboutme/styles.css';
import photo from '../../assets/photo.png'

const AboutMe = () => {
    return (
        <div className='container-about-me'>
            <div className='div1'>
                <figure>
                    <img className='photo' src={photo} alt='profile/photo' />
                </figure>
            </div>
            <div className='div2'>
                <h2>Natalia Rojas</h2>
                <h3>FullStack Developer</h3>
                <p></p>
            </div>
        </div>
    )
}

export default AboutMe