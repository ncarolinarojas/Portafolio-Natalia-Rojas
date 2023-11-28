import '../Portada/styles.css';
import dev from '../../assets/dev.png'

const Portada = () => {
    return(
        <div className='portada'>
            <figure>
                <img className='photo-port' src={dev} alt='Portada' />
            </figure>
            <h1 className='title'>Bienvenido!</h1>
        </div>
    )
}

export default Portada;