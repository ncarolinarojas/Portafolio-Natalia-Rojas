import '../Card/style.css';

function Card({ project, tools, photo, urlPage, use, urlRepo}) {
    return (
        <div className='container-photo'>
            <div>
                <figure>
                    <img className='photo-card' src={photo} alt="" />
                </figure>
            </div>
            <div>
                <h3>{project}</h3>
                <br />
                <p> Tools: {tools}</p>
                <p>Use:</p>
                <p className='parr'><span>{use}</span></p>
                <div className='buttons'>
                <a href={urlPage} target="_blank">
                    <button>view page</button>
                </a>
                <a href={urlRepo} target="_blank">
                    <button className='button2'>view code</button>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Card