import Layout from '../../components/Layout/index.jsx'
import FrontPage from '../../components/FrontPage/index.jsx';
import AboutMe from '../../components/Aboutme/index.jsx';
import ButtonHome from '../../components/ButtonHome/index.jsx';
import Tools from '../../components/Tools/index.jsx';
import Projects from '../../components/Projects/index.jsx'

const Home = () => {
    return (
        <Layout>
            <FrontPage />
            <AboutMe />
            <ButtonHome />
            <Tools />
        </Layout>
    )
}

export default Home;