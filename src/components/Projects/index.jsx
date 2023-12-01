import '../Projects/style.css';
import Card from '../Card';
import photoShopi from '../../assets/Shopi.png'

const Projects = () => {
    return (
        <div className='container-projects'>
            <div>
                <h2>
                    Projects
                </h2>
            </div>
            <div>
                <Card
                project={"Shopi E-commerce"}
                tools={["React.js", " ,TailwindCSS", " , useContext", " , API Fake Platzi"]}
                photo={photoShopi}
                urlpage={"https://shopi-e-commerce.netlify.app/"}
                use={"Make shopping, add products at card, view products after make the checkout and when user finally do the checkout, view their order."}
                urlRepo={"https://github.com/ncarolinarojas/Shop_Prueba"}
                />
            </div>
        </div>
    )
}

export default Projects