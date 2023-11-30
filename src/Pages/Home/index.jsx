import Layout from '../../components/Layout/index.jsx'
import FrontPage from '../../components/FrontPage/index.jsx';
import AboutMe from '../../components/Aboutme/index.jsx';
import Projects from '../../components/Projects/index.jsx';

const Home = () => {
    return (
        <Layout>
            <FrontPage />
            <AboutMe/>
            <Projects/>
        </Layout>
    )
}

export default Home;